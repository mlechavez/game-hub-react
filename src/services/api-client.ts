import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2da58a63d8174809a8f729b3a62cf4f4",
  },
});
