import axios from "axios";

export const fetchData = () => {
  axios.get("http://www.dell-lee.com/react/api/demo.json");
};
