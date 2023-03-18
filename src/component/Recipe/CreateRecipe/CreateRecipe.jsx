import axios from "axios"
import './createRecipe.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateRecipe = () => {
    const navigate = useNavigate()
    // const [data, setData] = useState({ title: "", author: "", file: "", ingredients: "", directions: "" })
    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")
    const [author, setauthor] = useState("")
    const [ingredients, setIngredent] = useState("")
    const [directions, setDirections] = useState("")
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            authorization: token,
            "Content-Type": "multipart/form-data"
        }
    }
    const Create = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("author", author)
        formData.append("file", file)
        formData.append("ingredients", ingredients)
        formData.append("directions", directions)
        try {
            await axios.post("https://recipe-backend-eila.onrender.com/recipe", formData, config).then((res) => {
                console.log(res.data.authorrecipeData)
            }).catch(e => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        }
        navigate("/post")
        alert("new receipe added")
    }

    return (
        <>
            <div className="recipe-container">
                <form onSubmit={Create}>
                    <div id="title-div">
                        <label>Recipe Title</label><br />
                        <input type="text" onChange={(e) => { setTitle(e.target.value) }} id="title" />
                    </div>
                    <div id="author-div">
                        <label>Author</label><br />
                        <input type="text" onChange={(e) => { setauthor(e.target.value) }} id="author" />
                    </div>
                    <div id="img-div">
                        <label>Please upload Image</label><br />
                        <input type="file" accept="image/*" onChange={(e) => { setFile(e.target.files[0]) }} id="img" />
                    </div>
                    <div id="ing-div">
                        <label>Ingredients</label><br />
                        <input type="text" onChange={(e) => { setIngredent(e.target.value) }} id="ing" />
                    </div>
                    <div id="dir-div">
                        <label>Recipe Direction</label><br />
                        <input type="text" onChange={(e) => { setDirections(e.target.value) }} id="dir" />
                    </div>
                    <button type="submit" id="create-btn">Submit</button>
                </form>

            </div>
        </>
    )
}
export default CreateRecipe