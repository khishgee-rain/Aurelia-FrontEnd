import React from "react";
import mastercard from "../photos/mastercard.png";
import visa from "../photos/visa.png";
import unionpay from "../photos/unionpay.png";
import qpay from "../photos/qpay.png";

const PayInfo = () => {
  return (
    <div className="bg-black text-white text-center py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide">Paying at the Hotel</h2>

      <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
        <img src={mastercard} alt="MasterCard" className="h-10 md:h-12" />
        <img src={visa} alt="VISA" className="h-10 md:h-12" />
        <img src={unionpay} alt="UnionPay" className="h-10 md:h-12" />
        <img src={qpay} alt="QPay" className="h-10 md:h-12" />
      </div>

      <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Please keep noise down after 10pm. Smoking or smoking devices are not allowed in the building. Pets are not allowed.
        For additional services and payment methods, please consult the reception.
      </p>
    </div>
  );
};

export default PayInfo;
