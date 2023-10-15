'use client';

import { useCallback, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useRentModal from "@/hooks/useRentModal";
import { SafeUser } from "@/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import DropdownWrapper from "../wrappers/DropdownWrapper";
import { offerItems } from "@/constants";
import { MdLocalOffer } from "react-icons/md";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [activeModal, setActiveModal] = useState<number>(0)
  const toggle = (id: number) => {
      setActiveModal(id);
  }; // try to merge with toggleOpen 

  const toggleOpen = () => { // move this to hooks later to use globally
    activeModal === 1 ? toggle(0) : toggle(1)
  }

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  useEffect(() => {
    const closeUserMenu = () => {
      if (activeModal !== 0) {
        toggle(0);
      }
    };

    // Add a click event listener to the document
    document.addEventListener("click", closeUserMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeUserMenu);
    };
  }, [activeModal]);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3 md:min-w-[200px]">
        <div 
          onClick={() => {activeModal === 2 ? toggle(0) : toggle(2)}}
          className="block text-sm font-semibold py-2 px-4 rounded-full bg-secondary hover:bg-lightGold duration-700 transition cursor-pointer select-none"
        >
          <span className="hidden sm:block select-none">
            Offers
          </span>
          <span className="block sm:hidden select-none">
            <MdLocalOffer />
          </span>
        </div>
        {activeModal === 2 ?
        <DropdownWrapper>
          {offerItems.map(item => (
            <MenuItem
              key={item.id} 
              label={item.label}
              onClick={() => router.push(item.href)}
            />
          )
          )}
        </DropdownWrapper>
        : <></>}
        <div 
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] text-secondary hover:text-primary bg-primary hover:bg-lightGold duration-700 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block select-none">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {activeModal === 1 && (
        <DropdownWrapper>
            {currentUser ? (
              <>
                <MenuItem 
                  label="Trips" 
                  onClick={() => router.push('/trips')}
                />
                <MenuItem 
                  label="Favorites" 
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                  label="Received reservations" 
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                  label="My properties" 
                  onClick={() => router.push('/properties')}
                />
                <MenuItem 
                  label="Rent your home" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
                <MenuItem 
                  label="Rent your home" 
                  onClick={onRent}
                />
              </>
            )}
        </DropdownWrapper>
      )}
    </div>
   );
}
 
export default UserMenu;