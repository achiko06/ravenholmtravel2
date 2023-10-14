import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";
import EmptyState from "@/components/EmptyState";

import getListings, { 
  IListingsParams
} from "@/actions/getListings";
import getCurrentUser from "@/actions/getCurrentUser";
import ClientOnly from "@/components/ClientOnly";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";

interface HomeProps {
  searchParams: IListingsParams
};

export const dynamic = "force-dynamic"

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  //const test = true
  //console.log(Object.keys(searchParams).length)

  if (Object.keys(searchParams).length === 0) {
    return (
      <ClientOnly>
        <Hero/>
        <Featured/>
      </ClientOnly>
    );
  }

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home;