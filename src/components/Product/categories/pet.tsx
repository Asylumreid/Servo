import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuFilm, LuSpeaker, LuVideotape } from "react-icons/lu";

const Pet = () => {
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
      <ProductCard icon={LuVideotape} title={"Pet Sitting"}>
      Enjoy peace of mind while you're away with our reliable pet sitting services, ensuring your furry friends are cared for in the comfort of their own home.
      </ProductCard>

      <ProductCard icon={LuFilm} title={"Dog Walking"}>
      Keep your dog happy and healthy with our professional dog walking services, providing regular exercise and companionship for your canine.
      </ProductCard>

      <ProductCard icon={LuSpeaker} title={"Pet Grooming"}>
      Pamper your pet with our grooming services, from baths to haircuts, ensuring they look and feel their best.
      </ProductCard>
    </Grid>
  );
};

export default Pet;
