
import axios from "axios";

export default axios.create({
    baseURL: "https://texttospeech.googleapis.com/$discovery/rest?version=v1",
    headers: {
        "Content-type": "application/json"
    }
})  