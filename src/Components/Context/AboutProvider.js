import React, { useState } from "react";

import PackageContext from "../Context/Context"

const AboutProvider=(props)=>{
    const [aboutData,setAboutData] = useState(
        {
            ceoname:"Shanmukha Bharadwaz",
            ceoQualification:"B.Com,ACA,CMA",
            ceoinfo:"He is in the practice for the past 5 years beginning by setting up own practice and building it up and Experience of 5 years in this field. He has good knowledge of departmental working at lower level up to the appellate level. He has varied experience in all areas of Audit, Investigation, Due Diligence, Taxation (Direct and Indirect), Valuation, Company Law Matters for both domestic and foreign companies, Management Consultancy. Work with clients includes IT companies (Small and medium sized), Start up , firms, banks, trusts, societies, charitable and educational institutions besides few renowned individuals. He has also experience in Cost management of Start-ups and Share valuation for fund raising. He is specialized in implementing internal controls and Internal Systems Audit in various startups and MNC’s Acting as a virtual chief financial officer (CFO) for more than 15 companies.",
            "section2":{
                heading1 :"A TEAM WITH INTEGRITY",
                info:"Our client list includes domestic and international entities of various sizes from different industries. Our team of experienced professionals provide financial solutions in a manner where client satisfaction is our top priority.",
            },
            "whyprudence":{
                  heading:"Why Prudence",

            },
            "aboutteam":{
                "tejeswini":{
                        name :"Phani Tejaswini ",
                        info:"She has an experience of more than 6 years in areas of expertise are Accounts, Finance, Project Financing, Credit Appraisal, Auditing and Taxation. She was previously associated with Manufacturing and IT Industry.She has also been actively involved in preparation of Financial Statements, Annual Reports, Consolidated Financial Statements, Cash Flow Statements, Capital Adequacy, Disclosures & Notes to Accounts, and Memorandum to Audit Committee/Board and related Annexure.She is specialized in implementing internal controls and Internal Systems Audit in various startups and MNC’s. She has also experience in Cost management of Start-ups and Share valuation for fund raising."

                },
                "shravan":{
                       name:"Shravan M S",
                       info:"Shravan M S B.com,CMAMore than 5 years of diverse industries experience in all areas of Audit, Accounting and Cost Analysis Well geared to take up any professional assignments in the above areas. He is expertise in cost analysis, preparation of project profitability and payback model."
                },
                "bhargavi":{
                       name:"Bharagavinadh Reddy",
                       info:"She has an experience of 5 year in finance and has an experience working with MNCs in financial Planning and analysis. Currently acting as V.CFO of Manufacturing company."
                }
            }

            
             
        }
    );
   

    return(
        <PackageContext.Provider
        value={
            {
                data:aboutData,
                
                
            }
        }
        >
         {
            props.children
         }
        </PackageContext.Provider>
    )
}

export default AboutProvider;