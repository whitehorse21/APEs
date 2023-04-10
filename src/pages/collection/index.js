import axios from "axios";

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Row, Col } from "react-bootstrap";
import ApeCard from "../../components/apeCard";
import { collectionFilterOptions } from "../../data";

import { CollectionContainer } from '../alphaCollection/alpha.style';

import leftImg from '../../images/home-left-side.svg';
import rightImg from '../../images/home-right-side.svg'
import Footer from "../../components/footer";
import ApeBtn from "../../components/button";
import SearchElement from "../../components/searchInput";
import OptionSelect from "../../components/selectOption";
import GridOption from "../../components/gridSelect";
import DisplayApeModal from "../../components/apeDetailModal";
import ReactPaginate from 'react-paginate';
import "../../components/pagination/styles.css";

const CollectionPage = () => {
  const signerAddress = localStorage.getItem("signer");

  const [selectedApe, setSelectedApe] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [orderOption, setOrderOption] = useState({field: "nativeId", direction: "ASC"});
  const [searchOptions, setSearchOptions] = useState([]);
  const pageLimit = 6;

  const cleanupModal = () => {
    setSelectedApe(null);
  }

  useEffect(() => {
    const nftData = {
      operationName: "Tokens",
      query: "fragment TokenFields on Token {\n  id\n  collectionId\n  nativeId\n  name\n  description\n  imageUri\n  ownerAddress\n  mintedByAddress\n  mintedAtHeight\n  burnedByAddress\n  burnedAtHeight\n  rank\n  score\n  __typename\n}\n\nfragment ListingFields on Listing {\n  id\n  tokenId\n  height\n  authorAddress\n  state\n  buyerAddress\n  price\n  listingFee\n  canceledAt\n  soldAt\n  createdAt\n  updatedAt\n  __typename\n}\n\nfragment OfferFields on Offer {\n  id\n  tokenId\n  height\n  fromAddress\n  toAddress\n  state\n  price\n  offerFee\n  rejectedAt\n  acceptedAt\n  withdrawnAt\n  createdAt\n  updatedAt\n  __typename\n}\n\nfragment TokenAssociations on Token {\n  collection {\n    slug\n    name\n    defaultImgUrl\n    __typename\n  }\n  attributes {\n    traitType\n    value\n    __typename\n  }\n  activeListing {\n    ...ListingFields\n    __typename\n  }\n  activeOffer {\n    ...OfferFields\n    __typename\n  }\n  __typename\n}\n\nquery Tokens($filters: TokensFiltersInput, $pagination: PaginationInput, $sort: [SortInput]) {\n  tokens(filters: $filters, pagination: $pagination, sort: $sort) {\n    items {\n      ...TokenFields\n      ...TokenAssociations\n      __typename\n    }\n    meta {\n      hasMore\n      total\n      __typename\n    }\n    __typename\n  }\n}\n",
      variables: {
        filters: {
          collectionSlug: null,
          ownerAddress: signerAddress,
          withActiveListing: false,
          withActiveOfferReceived: null,
          withActiveOfferSent: null,
        },
        pagination: {
          page: currentPage + 1,
          perPage: pageLimit
        },
        sort: [orderOption]
      }
    }

    console.log(nftData);
    
    axios
      .post('https://api.vesea.io/graphql', nftData)
      .then((res) => {
        console.log(res.data.data.tokens.items);
        //get total amount and calculate page count
        const totalSupply = res.data.data.tokens.meta.total;
        setTotalCount(totalSupply);
        const count = Math.ceil(totalSupply / pageLimit);
        setPageCount(count);

        //set result
        setSearchOptions(res.data.data.tokens.items);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [currentPage, orderOption]);

  const handlePageClick = (data) => {
    console.log('onPageChange', data);
    setCurrentPage(data.selected);
  }

  const handleSearch = (e) => {
    
  }

  const handleOptionSelect = (data) => {
    let selectedFilter = collectionFilterOptions.find((item) => {
      return item.label === data;
    });
    console.log(selectedFilter);
    setOrderOption(selectedFilter.sort);
  }

  return (
    <>
    <Container className="mt-5 pt-5">
      <CollectionContainer>
        <Row>
            <Col lg={12} xl={6} className="d-flex top-search collection">
            </Col>
            <Col lg={12} xl={6} className="d-flex grid-option">
              <OptionSelect
              handleChange={(e) => handleOptionSelect(e.target.value)}
              options={collectionFilterOptions} />
              <GridOption />
            </Col>
        </Row>
        <div className="d-flex justify-content-between align-items-baseline my-5">
        <h2>My Collection</h2>
        <span>({totalCount} results)</span>
        </div>
        <Row>
          { searchOptions.map((item, index) => (
            <Col className='mb-4' sm={12} md={6} lg={4} key={index}>
              <ApeCard 
                handleClick={() => {
                  setSelectedApe(item);
                }}
                item={item}>
              </ApeCard>
            </Col>
          ))
          }
          </Row>
          <Row>
          { totalCount > 0 && (
            <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            breakLabel="..."
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            forcePage={currentPage}
            onClick={(clickEvent) => {
              console.log('onClick', clickEvent);
              // Return false to prevent standard page change,
              // return false; // --> Will do nothing.
              // return a number to choose the next page,
              // return 4; --> Will go to page 5 (index 4)
              // return nothing (undefined) to let standard behavior take place.
            }}
          />
          )}
        </Row>

      </CollectionContainer>
    </Container>
    {
      selectedApe && 
      <DisplayApeModal
       ape={selectedApe}
       onClose={cleanupModal}
      />
      }
    <Footer leftImg={leftImg} rightImg={rightImg} />
    </>
  );
}

export default CollectionPage;