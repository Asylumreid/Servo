import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuBug, LuCode, LuRocket } from "react-icons/lu";

const Personalcare = () => {
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
      <ProductCard icon={LuCode} title={"Fixing Leaks"}>
      "Prevent water damage and conserve water with our quick and reliable leak fixing services, ensuring your personalcare is sealed and secure.
      </ProductCard>

      <ProductCard icon={LuBug} title={"Unclogging Drains"}>
      Keep your drains flowing smoothly with our efficient unclogging services, eliminating blockages and preventing future issues.
      </ProductCard>

      <ProductCard icon={LuRocket} title={"Install New Fixtures"}>
      Enhance your home with our professional fixture installation services, perfect for upgrades or replacements in kitchens and bathrooms.
      </ProductCard>
    </Grid>
  );
};

export default Personalcare;
