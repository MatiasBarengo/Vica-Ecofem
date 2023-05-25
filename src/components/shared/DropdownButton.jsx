import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { BuildingOffice2Icon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button color="deep-orange">Contact Us</Button>
      </PopoverHandler>
      <PopoverContent className="w-fit z-20">
        <ul>
          <li className="hover:bg-bgColor px-2 rounded-xl hover:border hover:border-primary duration-300 ease">
            <Link
              to={"https://wa.me/5491158088702"}
              target="_blank"
              className="flex gap-2 items-center py-1"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span className="text-sm"> WhatsApp</span>
            </Link>
          </li>
          <li className="hover:bg-bgColor px-2 rounded-xl hover:border hover:border-primary duration-300 ease">
            <Link
              to={"https://www.instagram.com/vica.ecofem/"}
              target="_blank"
              className="flex gap-2 items-center py-1"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
              <span className="text-sm"> Instagram</span>
            </Link>
          </li>
          <li className="hover:bg-bgColor px-2 rounded-xl hover:border hover:border-primary duration-300 ease">
            <Link
              className="flex gap-2 items-center py-1"
              to={"http://www.facebook.com"}
              target="_blank"
            >
              <i className="fa-brands fa-facebook text-xl"></i>
              <span className="text-sm"> Facebook</span>
            </Link>
          </li>
          <li className="hover:bg-bgColor px-2 rounded-xl hover:border hover:border-primary duration-300 ease">
            <Link
              to={"https://www.twitter.com"}
              className="flex gap-2 items-center py-1"
              target="_blank"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
              <span className="text-sm"> Twitter</span>
            </Link>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
