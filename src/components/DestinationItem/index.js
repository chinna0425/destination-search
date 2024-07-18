import './index.css'

const DestinationSearch = props => {
  const {searchdestination} = props

  const {name, imgUrl} = searchdestination
  console.log(name)
  return (
    <li className="list-items">
      <img src={imgUrl} alt={name} className="imagesetting" />
      <p className="paragraph">{name}</p>
    </li>
  )
}
export default DestinationSearch
