import { useState } from "react"
import FilePicker from "../FilePicker"
import Item from "../Item"

const Items = () => {
  const [items, setItems] = useState<Array<string | ArrayBuffer | null>>([])

  const addItemHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files!)
    const fileReaders = files.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          resolve(event.target?.result as string)
        }
        reader.onerror = (event) => {
          reject(event.target?.error)
        }
        reader.readAsDataURL(file)
      })
    })

    Promise.all(fileReaders)
      .then((results) => {
        setItems((items) => [...items, ...results])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <FilePicker onChange={addItemHandler} />
      {items.map((item, index) => (
        <Item key={index} src={item as string} />
      ))}
    </>
  )
}

export default Items
