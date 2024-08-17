import {NavLink} from 'react-router-dom'
const Footer = () => {
    return (
      <div className="bg-slate-900 py-10 px-20 text-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-lg font-bold mb-5">Abstract</h4>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Branches</p>
            </NavLink>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-5">Resources</h4>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Blog</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Help Center</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Release Notes</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Status</p>
            </NavLink>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-5">Community</h4>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Twitter</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">LinkedIn</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Facebook</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Dribble</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Podcast</p>
            </NavLink>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-5">Company</h4>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">About Us</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Creers</p>
            </NavLink>
            <NavLink to="/" className="hover:underline">
              <p className="mb-1">Legal</p>
            </NavLink>
            <p className="font-bold mb-1">Cnntact Us</p>
            <p className="text-sm">info@abstract.com</p>
          </div>
        </div>
        <hr className="border-t-2 text-slate-200 mt-10" />
        <div className="text-center mt-2">
          @ Copyright 2024 Abstract Studio Design, Inc. All rights reserved.
        </div>
      </div>
    );
};

export default Footer;