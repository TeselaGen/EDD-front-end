import React, { Component } from "react";
import Accordion from "../../../components/Accordion";
import Row from './row'
import Helmet from "react-helmet";

const config = [
  {
    title: "Account",
    content: (
      <Row content={[{ message: "Email Addresses", type: "ADD_EMAIL" }]} />
    )
  },
  {
    title: "Authentication and Authorization",
    content: (
      <Row
        content={[
          { message: "Groups", type: "ADD_GROUPS" },
          { message: "Users", type: "ADD_USERS" }
        ]}
      />
    )
  },
  {
    title: "Branding",
    content: <Row content={[{ message: "Brandings", type: "ADD_BRANDINGS" }]} />
  },
  {
    title: "Flat Pages",
    content: (
      <Row content={[{ message: "Flat pages", type: "ADD_FLAT_PAGES" }]} />
    )
  },
  {
    title: "Main",
    content: (
      <Row
        content={[
          { message: "Assays", type: "ADD_ASSAYS" },
          { message: "Carbon sources", type: "ADD_CARBON_SOURCES" },
          { message: "Gene Identifiers", type: "ADD_GENE_IDENTIFIERS" },
          { message: "Measurements Types", type: "ADD_MEASUREMENTS_TYPES" },
          { message: "Measurements Units", type: "ADD_MEASUREMENTS_UNITS" },
          { message: "Metabolites", type: "ADD_METABOLITES" },
          { message: "Metadata groups", type: "ADD_METADATA_GROUPS" },
          { message: "Metadata types", type: "ADD_METADATA_TYPES" },
          { message: "Phosphors", type: "ADD_PHOSPHORS" },
          { message: "Protein Identifiers", type: "ADD_PROTEIN_IDENTIFIERS" },
          { message: "Protocols", type: "ADD_PROTOCOLS" },
          { message: "Sbml templates", type: "ADD_SBML_TEMPLATES" },
          { message: "Strains", type: "ADD_STRAINS" },
          { message: "Studies", type: "NEW_STUDY" },
          { message: "Worklist templates", type: "ADD_WORKLIST_TEMPLATES" }
        ]}
      />
    )
  }
];

class siteAdministration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet title={"Site Administration"} />
        <h2>Site Administration</h2>
        <br />
          <Accordion elements={config}/>
      </div>
    );
  }
}

export default siteAdministration;
