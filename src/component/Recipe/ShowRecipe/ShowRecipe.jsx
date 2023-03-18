import axios from "axios"
import "./showRecipe.css"
// import './createRecipe.css'
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
const ShowRecipe = () => {
    const [recipe, setrecipe] = useState([])
    const [filter_recipe, setfilter_recipe] = useState([])
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        const config = {
            headers: { authorization: token }
        }
        axios.get("https://recipe-backend-eila.onrender.com/recipe", config).then((res) => {
            setrecipe(res.data.recipeData)
            setfilter_recipe(res.data.recipeData)

        })
    }, [])

    const Logout = () => {
        window.sessionStorage.removeItem("token")
        navigate("/")
    }

    const Search = (e) => {
        let search = e.target.value;
        if (search === "") {
            setfilter_recipe(recipe)
            return
        }
        let fs = recipe.filter((items, i) => (items.title.toLowerCase().includes(search)))
        setfilter_recipe(fs)

    }
    return (
        <>
        <header style={{ width: "70%", height: "14vh" }} id="header" >
        <span>
          <img src='https://th.bing.com/th/id/OIP.4ihPWq0yuERvxEfGSQglnwHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' width="47%" height="66vh" style={{margin:"1% 0 0 26%"}} />
        </span>
            <span onClick={Logout} id="logout">Logout</span>
        </header>
            <div id="showData">


                <div>
                    <input type="text" placeholder="search recipe" style={{ width: "80%", height: "6vh", margin: "4% 0 0 7%", paddingLeft: "3%" }} onChange={Search} />
                    <div>
                        <Link to="/create">
                            <span>
                                <img src="https://th.bing.com/th/id/OIP.EDPzpx2bnQXnn-JvSnSxOwHaGU?w=192&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" srcset="" width="10%" height="35vh" style={{ margin: "3% 0 0 19%" }} />
                            </span>
                            <span style={{ fontSize: "140%", fontFamily: "cursive" }}>

                                <i> Add New Recipe</i>
                            </span>
                        </Link>
                    </div>


                </div>

                <div>
                    {filter_recipe.map((items, i) => {
                        return (
                            <div id="main-container">
                                <div id="all-content" >

                                    <h2> <span style={{ color: "blue" }}>Recipe Title :-</span>  {items.title}</h2>
                                    <img src={items.file} alt="file" style={{ width: "100%", height: "30vh" }} />
                                    <p><b>Author :</b>{items.author}</p>
                                    <p><b>Ingredients :</b> {items.ingredients}</p>
                                    <p><b>Directions :</b> {items.directions}</p>
                                </div>
                                <div id="disc-div">
                                    {/* <p><b>Author :</b>{items.author}</p> */}
                                    <p><b>Ingredients :</b> {items.ingredients}</p>
                                    <p><b>Directions :</b> {items.directions}</p>

                                </div>
                            </div>


                        )
                    })}
                </div>
            </div>

        </>
    )
}
export default ShowRecipe