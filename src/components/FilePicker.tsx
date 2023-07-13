interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const FilePicker = (props: Props) => {
  const { onChange } = props

  return <input type="file" accept="image/*" onChange={onChange} multiple />
}

export default FilePicker
