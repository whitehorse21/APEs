const collectionFilterOptions = [
  {
    label: 'IDs (lowest)',
    value: 'lowest',
    sort: {field: "nativeId", direction: "ASC"}
  },
  {
    label: 'IDs (highest)',
    value: 'highest',
    sort: {field: "nativeId", direction: "DESC"}
  },
  {
    label: 'Rarity (most)',
    value: 'most',
    sort: {field: "rank", direction: "ASC"}    
  },
  {
    label: 'Rarity (least)',
    value: 'least',
    sort: {field: "rank", direction: "DESC"}    
  },
  {
    label: 'Price (highest)',
    value: 'highprice',
    sort: {field: "listingPrice", direction: "DESC"}    
  },
  {
    label: 'Price (lowest)',
    value: 'lowprice',
    sort: {field: "listingPrice", direction: "ASC"}    
  },
  {
    label: 'Offer (highest)',
    value: 'highprice',
    sort: {field: "offerPrice", direction: "DESC"}    
  },
  {
    label: 'Offer (lowest)',
    value: 'lowprice',
    sort: {field: "offerPrice", direction: "ASC"}    
  }
]

const myCollectionOptions = [
  {
    label: 'Recently Added',
    value: 'recent',
  },
  {
    label: 'Oldest',
    value: 'oldest',
  },
]

export { collectionFilterOptions, myCollectionOptions }