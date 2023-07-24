import "./style.css"


export default function Button({className , name }) {
  return (
    <>
       <button className={"orange_secondary" && className }>{ name ||"button" }</button>
    </>
  )
}
