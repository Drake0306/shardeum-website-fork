import { Menu, MenuButton, MenuItem, MenuList, useDisclosure, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "next-i18next";
import { useState, Key } from "react";
import { UrlObject } from "url";

const MenuComponent = (props: any) => {
  const { t: commonTranslation } = useTranslation(["common"]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [link, setLink] = useState(props.link);

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        // _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {commonTranslation(link.title)} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList
        style={{
          maxHeight: "500px",
          overflowX: "hidden",
          background: "#000000",
        }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {link.submenu?.map(
          (item: any) =>
            item.newPage === true ? (
              <a
                target="_blank"
                href={item.link}
                // onClick={() => window.open(item.link)}
                rel="noreferrer"
              >
                {/* <NextLink key={item.title} href={item.link} passHref> */}
                {/* <Link
                    style={{ textDecoration: "none !important" }}
                    variant=""
                    rel="noopener noreferrer"
                    // target={item.newPage ? "_blank" : "_self"}
                    target={"_self"}
                  > */}
                <MenuItem style={{ textDecoration: "none !important" }} key={item.title}>
                  {commonTranslation(item.title)}
                </MenuItem>
                {/* </Link> */}
                {/* </NextLink> */}
                {/* <MenuItem key={item.title}>{commonTranslation(item.title)}</MenuItem> */}
              </a>
            ) : (
              <NextLink key={item.title} href={item.link} passHref>
                <a href={item.link} rel="noreferrer">
                  <MenuItem key={item.title}>{commonTranslation(item.title)}</MenuItem>
                </a>
              </NextLink>
            )
          // <>
          //   {/* <a key={item.title} target="_blank" href={item.link} rel="noreferrer">
          //     <NextLink key={item.title} href={item.link} passHref>
          //       <MenuItem key={item.title}>{commonTranslation(item.title)}</MenuItem>
          //     </NextLink>
          //   </a> */}
          //   <NextLink key={item.title} href={item.link} passHref>
          //     <Link
          //       variant="navlink"
          //       rel="noopener noreferrer"
          //       target={item.newPage ? "_blank" : "_self"}
          //       fontWeight={item.highlight ? "bold" : "normal"}
          //     >
          //       <MenuItem key={item.title}>{commonTranslation(item.title)}</MenuItem>
          //     </Link>
          //   </NextLink>
          // </>
        )}
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
