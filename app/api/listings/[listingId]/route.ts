import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";

interface IParams {
  listingId?: string;
}

export async function DELETE(
  request: Request, 
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id
    }
  });

  return NextResponse.json(listing);
}

export async function PATCH(
  req: Request,
  { params }: { params: IParams }
) {
  try {   
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const { listingId } = params;

    if (!listingId || typeof listingId !== 'string') {
      throw new Error('Invalid ID');
    }

    const body = await req.json();
    const { 
      title,
     } = body;
    
    const listing = await prisma.listing.findFirst({
      where: {
        id: listingId,
        userId: currentUser.id
      }
    });

    if (!listing) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const updatedListing = await prisma.listing.update({
      where: {
        id: listingId,
      },
      data: {
        title,
      }
    });
  
    return NextResponse.json(updatedListing);
  } catch (error) {
    console.log('[LISTING_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
