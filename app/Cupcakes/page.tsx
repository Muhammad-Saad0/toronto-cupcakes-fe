"use client";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import BackToTop from "@/components/Shared/BackToTop";
import React, { useEffect, useState } from "react";
import { data } from "@/temporary data/cupcakes";
import {
  AddressType,
  CupcakeCategoryType,
  CupcakeType,
} from "@/types/types";
import axios from "axios";

function page() {
  const [cupcakes, setCupcakes] = useState<CupcakeType[]>([]);

  const [filteredCupcakes, setFilteredCupcakes] = useState<CupcakeType[]>(
    []
  ); // State to hold filtered cupcakes

  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [searchType, setSearchType] = useState<CupcakeCategoryType>("All");

  const getCupcakesFromDB = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cupcake/get_all`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setCupcakes(await response.json());
  };

  useEffect(() => {
    //  Later fetch the cupcakes from api
    getCupcakesFromDB();
  }, []);

  useEffect(() => {
    console.log("use effect ran");

    const filteredBySearch = cupcakes.filter((cupcake) =>
      cupcake.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    var filteredWithType;
    if (searchType == "All") {
      filteredWithType = filteredBySearch;
      console.log("inside if");
    } else {
      filteredWithType = filteredBySearch.filter((cupcake) =>
        cupcake.type.toLowerCase().includes(searchType.toLowerCase())
      );
    }

    setFilteredCupcakes(filteredWithType);
  }, [cupcakes, searchType, searchQuery]);

  return (
    <div>
      <div className="text-center p-10 font-averia">
        <h1 className="font-bold text-4xl mb-4">Delight in Every Bite </h1>
        <h1 className="text-3xl">Discover Our Gourmet Cupcakes</h1>
      </div>

      <SearchBar
        setSearchQuery={setSearchQuery}
        setSearchType={setSearchType}
        searchType={searchType}
      />

      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-20"
      >
        {filteredCupcakes.map((cupcake) => (
          <ProductCard key={cupcake.id} Cupcake={cupcake} />
        ))}
      </section>

      <BackToTop />
    </div>
  );
}

export default page;
