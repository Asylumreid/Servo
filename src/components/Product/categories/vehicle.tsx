import { Grid } from "@chakra-ui/react";
import React from "react";
import { LuBarChartBig, LuPodcast, LuTrendingUp } from "react-icons/lu";
import { ProductCard } from "../card";

const Vehicle = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      <ProductCard icon={LuPodcast} title={"Vehicle Wash"}>
      Conveniently maintain your vehicle's sparkle with our on-site car wash services, bringing premium cleaning directly to you.
      </ProductCard>

      <ProductCard icon={LuTrendingUp} title={"Detailing"}>
      Transform your vehicle inside and out with our thorough detailing services, focusing on deep cleaning and fine finishing touches for a pristine appearance.
      </ProductCard>

      <ProductCard icon={LuBarChartBig} title={"Minor Repairing"}>
      Keep your vehicle running smoothly with our minor repair services, addressing quick fixes like battery replacements and light changes efficiently at your location.
      </ProductCard>
    </Grid>
  );
};

export default Vehicle;
