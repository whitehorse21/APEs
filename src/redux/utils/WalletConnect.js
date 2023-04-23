import React, { useState } from "react";
import Connex from "@vechain/connex";

export const truncateAddress = (str) => {
  return str.substr(0, 4) + "..." + str.substr(str.length - 4, str.length);
};

export const login = () => {
  return new Promise((resolve, reject) => {
    const vendor = new Connex.Vendor("main");
    vendor
      .sign("cert", {
        purpose: "identification",
        payload: {
          type: "text",
          content: "Please sign the certificate to continue purchase",
        },
      })
      .request()
      .then((r) => {
        resolve(r.annex.signer);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
