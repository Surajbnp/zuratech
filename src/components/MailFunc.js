import axios from "axios";

const sendMail = (userName, userEmail, phone,  bodyText, setLoading) => {
  setLoading(true);
  return axios
    .post("https://zuramarket.xyz/api/email/lhmail", {
      userName,
      userEmail,
      phone,
      bodyText,
    })
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      return { success: true, data: res.data };
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      console.log("error while sending mail");
      return { success: false, error: err };
    });
};

export default sendMail;
