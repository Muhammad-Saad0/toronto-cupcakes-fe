"use client";
import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function page() {
  return (
    <div className="m-auto font-averia">
      <ConfettiExplosion
        particleSize={15}
        particleCount={200}
        duration={2500}
        width={3000}
      />

      <div className="flex flex-col items-center justify-center py-10">
        <img src="/green_check.png" alt="green_check" />
        <h4>Your order has been placed!!!</h4>
      </div>
    </div>
  );
}

export default page;
