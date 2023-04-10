import { ContainerElement, ItemsContainer, ItemBox} from "./stats.style";

const HeadStats = ({title, info}) => {
  
  const [firstWord, secondWord ] = title.split(' ');
  const {total, addresses, floor} = info;

  return (
    <ContainerElement>
      <ItemsContainer>
        <ItemBox>
            <span className='price'>{total} <br />Items</span>
        </ItemBox>
        <ItemBox>
          <span className='price'>{addresses}</span>
          <span className='item-name'>Owners</span>
        </ItemBox>
        <ItemBox>
          <span className='price'>{floor} V</span>
          <span className='item-name'>Floor Price</span>
        </ItemBox>
        <ItemBox>
          <h3 className='alpha'>{firstWord} <br />{secondWord}</h3>
        </ItemBox>
      </ItemsContainer>
      {firstWord === "Alpha" ? (
        <p className='description'>
          Mad Ⓥ-Apes is a collection of 4,999 mad apes. These apex predators were looking for a clean environment, and they found one of the best habitats possible here in the VeChain metaverse.       
        </p>
      ) : (
        <p className='description'>
          5,000 new, 3D-style, mad apes. The first NFT collection of its kind within the VNFT space, FUSION Series is the second collection to come out of the Mad Ⓥ-Apes project.
        </p>
      )}
    </ContainerElement>
  )
}

export default HeadStats;