import axios from "axios";
import { Row, Col, Button } from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import Footer from '../../components/footer';

import { useEffect, useState } from 'react';

import { CollectionContainer } from './alpha.style';

import ApeCard from '../../components/apeCard';
import { filterOptions, collectionFilterOptions } from '../../data';
import PageHeader from '../../components/pageHeader';
import HeadStats from '../../components/headerStats';
import SearchElement from '../../components/searchInput';
import ApeBtn from '../../components/button';
import OptionSelect from '../../components/selectOption';
import GridOption from '../../components/gridSelect';
import DisplayFilterOption from '../../components/filterOptionDisplay';
import DisplayApeModal from '../../components/apeDetailModal';
import ReactPaginate from 'react-paginate';
import "../../components/pagination/styles.css";
import { RiCloseFill } from 'react-icons/ri';

import alphaCollectionImg from '../../images/alphas-header.jpeg'
import leftImg from '../../images/home-left-side.svg';
import rightImg from '../../images/home-right-side.svg'

const AlphaCollection = () => {
  const [totalFilter, setTotalFilter] = useState([]);
  const [selectedApe, setSelectedApe] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [orderOption, setOrderOption] = useState({field: "nativeId", direction: "ASC"});
  const [filterList, setFilterList] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]);
  const [tokenID, setTokenID] = useState(-1);
  const [colorFilter, setColorFilter] = useState({});
  const [collectionStats, setCollectionStates] = useState({});

  const pageLimit = 12;
  
  const cleanupModal = () => {
    setSelectedApe(null);
  }

  useEffect(() => {
    const nftData = {
      operationName: "CollectionBySlug",
      query: "fragment CollectionFields on Collection {\n  id\n  name\n  slug\n  description\n  pageUrl\n  authorName\n  authorUrl\n  authorAddress\n  verified\n  bannerImgUrl\n  defaultImgUrl\n  thumbnailUrl\n  featured\n  type\n  status\n  edition\n  image\n  startedAtHeight\n  config\n  __typename\n}\n\nfragment CollectionAssociationsStats on Collection {\n  stats {\n    maxListingPrice\n    minListingPrice\n    avgListingPrice\n    maxOfferPrice\n    minOfferPrice\n    avgOfferPrice\n    totalSupply\n    uniqueAddresses\n    __typename\n  }\n  __typename\n}\n\nfragment CollectionAssociationsAttributes on Collection {\n  attributes {\n    traitType\n    value\n    total\n    __typename\n  }\n  __typename\n}\n\nquery CollectionBySlug($slug: String!) {\n  collectionBySlug(slug: $slug) {\n    ...CollectionFields\n    ...CollectionAssociationsStats\n    ...CollectionAssociationsAttributes\n    __typename\n  }\n}\n",
      variables: {
        slug: "mad_vapes"
      }
    }
    axios
      .post('https://api.vesea.io/graphql', nftData)
      .then((res) => {
        const stats = res.data.data.collectionBySlug.stats;
        const totalSupply = stats.totalSupply;
        setTotalCount(totalSupply);
        const count = Math.ceil(totalSupply / pageLimit);
        setPageCount(count);
        setCurrentPage(0);

        //get collection stats
        setCollectionStates({total: stats.totalSupply, addresses: stats.uniqueAddresses, floor: Number(stats.minListingPrice) / 10 ** 18})
        
        //set filter options
        const allAttributes = res.data.data.collectionBySlug.attributes;
        let attributeOptions = {};
        for (let nIdx = 0; nIdx < allAttributes.length; nIdx++) {
          const eachAttribute = allAttributes[nIdx];

          const title = eachAttribute.traitType;
          const name = eachAttribute.value;
          const value = eachAttribute.total;
    
          let eachList = attributeOptions[title];
          if (eachList) {
            attributeOptions[title] = [...eachList, {name, value}];
          } else {
            attributeOptions[title] = [{name, value}];
          }
        }

        if (Object.keys(attributeOptions).length > 0) {
          let arrayFilter = Object.keys(attributeOptions).map((item) => {
            return {title: item, options: attributeOptions[item].sort((a, b) => a.name > b.name ? 1 : -1)};
          });

          setTotalFilter(arrayFilter.sort((a, b) => a.title > b.title ? 1 : -1));
        }
    
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  /*
  useEffect(() => {
    const options = totalFilter[0].options;
    let colorObj = {};
    options.forEach(option => {
      colorObj[option.name.toLocaleLowerCase()] = 0;
    })
  }, [totalFilter]);
  */

  const handleColorFilter = (e) => {
    e.target.classList.toggle("btn-danger");
    const filter = e.target.textContent.split(' ')[0]
  }

  useEffect(() => {
    let filterAttributes = {};
    let colorAttributes = {};

    for (let i = 0; i < filterList.length; i++) {
      const eachFilter = filterList[i];

      const title = eachFilter.split(',')[0];
      const value = eachFilter.split(',')[1];

      let eachList = filterAttributes[title];
      if (eachList) {
        filterAttributes[title] = [...eachList, value];
      } else {
        filterAttributes[title] = [value];
      }

      //make colorFilter
      let selectedFilter = totalFilter.find((item) => {
        return item.title === title;
      });

      let detailedFilter = selectedFilter.options.find((item) => {
        return item.name === value;
      });

      colorAttributes[value] = detailedFilter.value;
    }
    setColorFilter(colorAttributes);
    
    let nftData = {
      operationName: "Tokens",
      query: "fragment TokenFields on Token {\n  id\n  collectionId\n  nativeId\n  name\n  description\n  imageUri\n  ownerAddress\n  mintedByAddress\n  mintedAtHeight\n  burnedByAddress\n  burnedAtHeight\n  rank\n  score\n  __typename\n}\n\nfragment ListingFields on Listing {\n  id\n  tokenId\n  height\n  authorAddress\n  state\n  buyerAddress\n  price\n  listingFee\n  canceledAt\n  soldAt\n  createdAt\n  updatedAt\n  __typename\n}\n\nfragment OfferFields on Offer {\n  id\n  tokenId\n  height\n  fromAddress\n  toAddress\n  state\n  price\n  offerFee\n  rejectedAt\n  acceptedAt\n  withdrawnAt\n  createdAt\n  updatedAt\n  __typename\n}\n\nfragment TokenAssociations on Token {\n  collection {\n    slug\n    name\n    defaultImgUrl\n    __typename\n  }\n  attributes {\n    traitType\n    value\n    __typename\n  }\n  activeListing {\n    ...ListingFields\n    __typename\n  }\n  activeOffer {\n    ...OfferFields\n    __typename\n  }\n  __typename\n}\n\nquery Tokens($filters: TokensFiltersInput, $pagination: PaginationInput, $sort: [SortInput]) {\n  tokens(filters: $filters, pagination: $pagination, sort: $sort) {\n    items {\n      ...TokenFields\n      ...TokenAssociations\n      __typename\n    }\n    meta {\n      hasMore\n      total\n      __typename\n    }\n    __typename\n  }\n}\n",
      variables: {
        filters: {
          collectionSlug: "mad_vapes",
          nativeIds: [],
          ownerAddress: null,
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
    
    if (Object.keys(filterAttributes).length > 0) {
      let arrayFilter = Object.keys(filterAttributes).map((item) => {
        return {traitType: item, values: filterAttributes[item]};
      });
      nftData.variables.filters.attributes = arrayFilter;
    }

    if (tokenID > -1) {
      nftData.variables.filters.nativeIds = [{collectionSlug: "mad_vapes", nativeIds: [tokenID]}];
    }

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
  }, [currentPage, orderOption, filterList, tokenID]);

  
  /*
  const collections = searchOptions.slice(
    (currentPage) * pageLimit,
    (currentPage) * pageLimit + pageLimit
    ).map((item, index) => (
      <Col className='mb-4' sm={12} md={6} lg={4} key={index}>
        <ApeCard
          handleClick={() => {
            setSelectedApe(item);
          }} 
          item={item} />
      </Col>
    ));
  */
    const collections = searchOptions.map((item, index) => (
        <Col className='mb-4' sm={12} md={6} lg={4} key={index}>
          <ApeCard
            handleClick={() => {
              console.log(item);
              setSelectedApe(item);
            }} 
            item={item} />
        </Col>
      ));
  
  const handlePageClick = (data) => {
    console.log('onPageChange', data);
    setCurrentPage(data.selected);
  }

  const handleOptionSelect = (data) => {
    let selectedFilter = collectionFilterOptions.find((item) => {
      return item.label === data;
    });
    console.log(selectedFilter);
    setOrderOption(selectedFilter.sort);
  }

  const handleFilterSelect = (data) => {
    let nIdx = filterList.indexOf(data);
    if (nIdx !== -1) {
      setFilterList(filterList.filter((item) => item !== data));
    } else {
      setFilterList([...filterList, data]);
    }
  }

  const handleClearFilterList = () => {
    setFilterList([]);
  }

  const handleSearch = (e) => {
    const searchText = e.target.value;
    if (e.key === 'Enter') {
      if (searchText.length > 0) {
        console.log(Number(searchText));
        setTokenID(Number(searchText));
      } else {
        setTokenID(-1);
      }
    }
  }

  return (
    <>
    <PageHeader slide={alphaCollectionImg} />
    <HeadStats title="Alpha Collection" info={collectionStats} />

    <CollectionContainer>
      <Row>
        <Col sm={12} md={3} className="pr-3">
          <div className="d-flex justify-content-between align-items-baseline">
            <h3 className='filter'>Filters</h3>
            <button className="close-button" onClick={handleClearFilterList}><RiCloseFill /></button>
          </div>

          <div className='mb-5'>
            <ApeBtn
                handleClick={(e) => {
                  e.target.classList.toggle("btn-danger");
                }} 
                title={`All (${totalCount})`} />
            { Object.keys(colorFilter).map((item, index) => (
              <ApeBtn
                handleClick={(e) => {
                  
                }}
              key={index} 
              title={`${item} (${colorFilter[item]})`} />
            ))
            }
          </div> 
          <div className='mb-5'>
          { totalFilter.map((item, index) => (
            <DisplayFilterOption option={item} selValues={filterList} key={index} handleChange={(data) => handleFilterSelect(data)}/>
          ))}
          </div>

        </Col>

        <Col sm={12} md={9}>
          <Row>
            <Col lg={12} xl={6} className="d-flex top-search">
              <h3 className='alpha'>Alphas({totalCount})</h3>
              <SearchElement
                handleChange={handleSearch}
                handleKeyPress={handleSearch}
                placeholder="Find by Serial" position >
                <BiSearchAlt2 />
              </SearchElement>

            </Col>
            <Col lg={12} xl={6} className="d-flex grid-option">
              <OptionSelect
               handleChange={(e) => handleOptionSelect(e.target.value)}
               options={collectionFilterOptions} />
              <GridOption />
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="mt-4">
              <Row className='mt-4'>
                { searchOptions.length > 0 && collections }
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
            </Col>
          </Row>
        </Col>

      </Row>
      {
      selectedApe && 
      <DisplayApeModal
       ape={selectedApe}
       onClose={cleanupModal}
      />
      }
    </CollectionContainer>
    <Footer leftImg={leftImg} rightImg={rightImg} />

    </>
  )
}

export default AlphaCollection;