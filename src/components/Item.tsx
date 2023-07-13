interface Props {
  src: string
}

const Item = (props: Props) => {
  const { src } = props

  return <img src={src} />
}

export default Item
