import { ethers } from "ethers";
import { useEffect, useState, useRef } from "react";
import abi from "../back-end/constants/abi.json";
import { create as ipfsHttpClient } from "ipfs-http-client";
const https = require("https");

function test() {
  const inputRef = useRef(null);
  const [isDis, setIsDis] = useState(true);
  const [address, setAddress] = useState("");

  async function getIPFS() {
    // this is a secret key, do not share it!
    const auth =
      "Basic " +
      Buffer.from(projectId + ":" + projectSecret).toString("base64");

    const client = ipfsHttpClient({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: auth,
      },
    });

    // yazı ekleme
    console.log("client", client);
    const ourCID = await client.add();
    console.log("ourCID", ourCID.path);
    const cid = ourCID.path;
    //yazı ekleme

    //yazı çekme
    const url = `https://infura-ipfs.io/ipfs/${cid}`;
    console.log("url", url);
    const res = await fetch(url);
    const text = await res.text();
    console.log(text);
    //yazı çekme
  }

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      setIsDis(true);
    }
    if (fileObj) {
      setIsDis(false);
      //getIPFS(fileObj);
      console.log("fileObj ", fileObj);
      /**
       * resim yükleme kodu
       */
      //toBase64(fileObj).then((response) => console.log(response));
      console.log(fileObj);
      console.log(fileObj.name);
    }
  };

  async function connect() {
    if (typeof window.ethereum !== undefined) {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log("Metamask mevcut değil!");
          return;
        }
        let chainId = await ethereum.request({ method: "eth_chainId" });
        const mumbaiChainId = "0x13881";
        if (mumbaiChainId !== chainId) {
          return;
        }
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);

        await ethereum.request({
          method: "eth_requestAccounts",
        });
        window.localStorage.setItem("connected", "injected");

        /*let connectedProvider = new ethers.providers.Web3Provider(
            window.ethereum
        );*/
        //setSigner(await connectedProvider.getSigner());

        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        const ourSigner = await connectedProvider.getSigner();

        const contractAddress = "0x483B04A85164F2fc3d55796E7e3d3494B130A28f";
        const contract = new ethers.Contract(contractAddress, abi, ourSigner);

        const myProfile = await contract.getProfile(
          "0x036708BBe9E5AcC9602653ea9169b77EAac51EaF"
        );
        console.log(myProfile);
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {
    //connect();
    getIPFS();
  }, []);

  return (
    <div>
      <input
        className=""
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default test;
