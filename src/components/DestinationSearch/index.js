import './index.css'

const DestinationSearch = props => {
  const {searchElement, imgUrl} = props
  return (
    <div className="search-container">
      <input
        type="search"
        className="search-box"
        placeholder="search"
        onChange={searchElement}
      />
      <img src={imgUrl} alt="search icon" className="search-img" />
    </div>
  )
}
export default DestinationSearch
