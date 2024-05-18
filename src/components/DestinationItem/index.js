import './index.css'
const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li>
      <img src={imgUrl} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
