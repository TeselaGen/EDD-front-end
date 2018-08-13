import React from "react";
import Helmet from 'react-helmet';
import shaka from "./shaka.svg";
import { get } from 'lodash';

export default function NoResourceFound({ location = {}, returnTo }) {

  const pathname = get(location, 'state.invalidPathname', location.pathname);

  return (
    <div>
      <Helmet title="Not Found" />
      <h3 style={{ marginTop: "10%" }} className={"flex-column-center"}>
        Turn around dude you forgot your board!{" "}
      </h3>
      <div className={"flex-column-center"}>
        <img
          alt="shaka symbol"
          style={{ height: 150, width: 150 }}
          src={shaka}
        />
      </div>
      {pathname &&
        <span className={"flex-column-center"}>
          <h3>
            No match for <code>{pathname}</code>
          </h3>
        </span>}
        <br/>
        <div className={'flex-column-center'}>
          {returnTo || ''}
        </div>
    </div>
  );
}
