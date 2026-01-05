(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/treaties.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// data/treaties.ts
__turbopack_context__.s([
    "countries",
    ()=>countries,
    "treatyData",
    ()=>treatyData
]);
const countries = [
    {
        code: 'ARG',
        name: 'Argentina',
        flag: '🇦🇷'
    },
    {
        code: 'AUS',
        name: 'Australia',
        flag: '🇦🇺'
    },
    {
        code: 'AUT',
        name: 'Austria',
        flag: '🇦🇹'
    },
    {
        code: 'BGD',
        name: 'Bangladesh',
        flag: '🇧🇩'
    },
    {
        code: 'BEL',
        name: 'Belgium',
        flag: '🇧🇪'
    },
    {
        code: 'BRA',
        name: 'Brazil',
        flag: '🇧🇷'
    },
    {
        code: 'BGR',
        name: 'Bulgaria',
        flag: '🇧🇬'
    },
    {
        code: 'CAN',
        name: 'Canada',
        flag: '🇨🇦'
    },
    {
        code: 'CHL',
        name: 'Chile',
        flag: '🇨🇱'
    },
    {
        code: 'CHN',
        name: 'China',
        flag: '🇨🇳'
    },
    {
        code: 'COL',
        name: 'Colombia',
        flag: '🇨🇴'
    },
    {
        code: 'CZE',
        name: 'Czech Republic',
        flag: '🇨🇿'
    },
    {
        code: 'DNK',
        name: 'Denmark',
        flag: '🇩🇰'
    },
    {
        code: 'EGY',
        name: 'Egypt',
        flag: '🇪🇬'
    },
    {
        code: 'FIN',
        name: 'Finland',
        flag: '🇫🇮'
    },
    {
        code: 'FRA',
        name: 'France',
        flag: '🇫🇷'
    },
    {
        code: 'DEU',
        name: 'Germany',
        flag: '🇩🇪'
    },
    {
        code: 'GRC',
        name: 'Greece',
        flag: '🇬🇷'
    },
    {
        code: 'HKG',
        name: 'Hong Kong',
        flag: '🇭🇰'
    },
    {
        code: 'HUN',
        name: 'Hungary',
        flag: '🇭🇺'
    },
    {
        code: 'IND',
        name: 'India',
        flag: '🇮🇳'
    },
    {
        code: 'IDN',
        name: 'Indonesia',
        flag: '🇮🇩'
    },
    {
        code: 'IRL',
        name: 'Ireland',
        flag: '🇮🇪'
    },
    {
        code: 'ISR',
        name: 'Israel',
        flag: '🇮🇱'
    },
    {
        code: 'ITA',
        name: 'Italy',
        flag: '🇮🇹'
    },
    {
        code: 'JPN',
        name: 'Japan',
        flag: '🇯🇵'
    },
    {
        code: 'KAZ',
        name: 'Kazakhstan',
        flag: '🇰🇿'
    },
    {
        code: 'KEN',
        name: 'Kenya',
        flag: '🇰🇪'
    },
    {
        code: 'MYS',
        name: 'Malaysia',
        flag: '🇲🇾'
    },
    {
        code: 'MEX',
        name: 'Mexico',
        flag: '🇲🇽'
    },
    {
        code: 'MAR',
        name: 'Morocco',
        flag: '🇲🇦'
    },
    {
        code: 'NLD',
        name: 'Netherlands',
        flag: '🇳🇱'
    },
    {
        code: 'NZL',
        name: 'New Zealand',
        flag: '🇳🇿'
    },
    {
        code: 'NGA',
        name: 'Nigeria',
        flag: '🇳🇬'
    },
    {
        code: 'NOR',
        name: 'Norway',
        flag: '🇳🇴'
    },
    {
        code: 'PAK',
        name: 'Pakistan',
        flag: '🇵🇰'
    },
    {
        code: 'PER',
        name: 'Peru',
        flag: '🇵🇪'
    },
    {
        code: 'PHL',
        name: 'Philippines',
        flag: '🇵🇭'
    },
    {
        code: 'POL',
        name: 'Poland',
        flag: '🇵🇱'
    },
    {
        code: 'PRT',
        name: 'Portugal',
        flag: '🇵🇹'
    },
    {
        code: 'QAT',
        name: 'Qatar',
        flag: '🇶🇦'
    },
    {
        code: 'ROU',
        name: 'Romania',
        flag: '🇷🇴'
    },
    {
        code: 'RUS',
        name: 'Russia',
        flag: '🇷🇺'
    },
    {
        code: 'SAU',
        name: 'Saudi Arabia',
        flag: '🇸🇦'
    },
    {
        code: 'SGP',
        name: 'Singapore',
        flag: '🇸🇬'
    },
    {
        code: 'ZAF',
        name: 'South Africa',
        flag: '🇿🇦'
    },
    {
        code: 'KOR',
        name: 'South Korea',
        flag: '🇰🇷'
    },
    {
        code: 'ESP',
        name: 'Spain',
        flag: '🇪🇸'
    },
    {
        code: 'SWE',
        name: 'Sweden',
        flag: '🇸🇪'
    },
    {
        code: 'CHE',
        name: 'Switzerland',
        flag: '🇨🇭'
    },
    {
        code: 'THA',
        name: 'Thailand',
        flag: '🇹🇭'
    },
    {
        code: 'TUR',
        name: 'Turkey',
        flag: '🇹🇷'
    },
    {
        code: 'UAE',
        name: 'United Arab Emirates',
        flag: '🇦🇪'
    },
    {
        code: 'UKR',
        name: 'Ukraine',
        flag: '🇺🇦'
    },
    {
        code: 'GBR',
        name: 'United Kingdom',
        flag: '🇬🇧'
    },
    {
        code: 'USA',
        name: 'United States',
        flag: '🇺🇸'
    },
    {
        code: 'VNM',
        name: 'Vietnam',
        flag: '🇻🇳'
    }
].sort((a, b)=>a.name.localeCompare(b.name));
const treatyData = [
    {
        pair: 'United States-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Corporate Executive Category in USD'
    },
    {
        pair: 'United States-Canada',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article XI (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Cross-border Professional Category in USD'
    },
    {
        pair: 'United Kingdom-United States',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 7 (Business Profits)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech Founder Category in GBP'
    },
    {
        pair: 'Germany-United States',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 10 (Direct Investment)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Industrial Consultant Category in EUR'
    },
    {
        pair: 'Japan-United States',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12 (Royalties)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Creative Artist Category in JPY'
    },
    {
        pair: 'Australia-United Kingdom',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Portfolio)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Finance Specialist Category in AUD'
    },
    {
        pair: 'Singapore-Australia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Regional Director Category in SGD'
    },
    {
        pair: 'India-Singapore',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12 (Tech Services)',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Software Architect Category in INR'
    },
    {
        pair: 'China-Hong Kong',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Arrangement (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Trade Partner Category in CNY'
    },
    {
        pair: 'Brazil-Portugal',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Expat Investor Category in BRL'
    },
    {
        pair: 'Spain-Mexico',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Commercial Lead Category in EUR'
    },
    {
        pair: 'Italy-France',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Royalties)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Design Consultant Category in EUR'
    },
    {
        pair: 'Norway-Sweden',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10 (Exempt)',
        residency: 'Nordic Convention',
        status: 'Verified',
        notes: 'Nordic Talent Category in NOK'
    },
    {
        pair: 'Denmark-Finland',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 7 (Business)',
        residency: 'Nordic Convention',
        status: 'Verified',
        notes: 'Green Tech Lead Category in DKK'
    },
    {
        pair: 'South Africa-United Kingdom',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Legal Advisor Category in ZAR'
    },
    {
        pair: 'UAE-India',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10 (Investment)',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Strategic Investor Category in AED'
    },
    {
        pair: 'Saudi Arabia-United States',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 11 (Finance)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Energy Consultant Category in SAR'
    },
    {
        pair: 'Israel-United States',
        dividend: '12.5%',
        interest: '12.5%',
        royalty: '12.5%',
        article: 'Article 12 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'R&D Director Category in ILS'
    },
    {
        pair: 'Turkey-Germany',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Export Manager Category in TRY'
    },
    {
        pair: 'South Korea-United States',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 12 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech Liaison Category in KRW'
    },
    {
        pair: 'Vietnam-Japan',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Manufacturing Lead Category in VND'
    },
    {
        pair: 'Malaysia-Singapore',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12 (Royalties)',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Regional Talent Category in MYR'
    },
    {
        pair: 'Thailand-Australia',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Business Partner Category in THB'
    },
    {
        pair: 'New Zealand-United States',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Agri-Tech Lead Category in NZD'
    },
    {
        pair: 'Ireland-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Digital Nomad Category in EUR'
    },
    {
        pair: 'Belgium-Netherlands',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'European Professional Category in EUR'
    },
    {
        pair: 'Austria-Germany',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'DACH Consultant Category in EUR'
    },
    {
        pair: 'Switzerland-France',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Private Wealth Category in CHF'
    },
    {
        pair: 'Poland-United Kingdom',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Software Engineer Category in PLN'
    },
    {
        pair: 'Czech Republic-Germany',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Logistics Expert Category in CZK'
    },
    {
        pair: 'Hungary-Austria',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12 (Royalties)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech Specialist Category in HUF'
    },
    {
        pair: 'Greece-United Kingdom',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Shipping Magnate Category in EUR'
    },
    {
        pair: 'Egypt-UAE',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Project Manager Category in EGP'
    },
    {
        pair: 'Nigeria-United Kingdom',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Oil & Gas Expert Category in NGN'
    },
    {
        pair: 'Kenya-United States',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12 (Royalties)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech Entrepreneur Category in KES'
    },
    {
        pair: 'Argentina-Spain',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Creative Director Category in ARS'
    },
    {
        pair: 'Chile-United States',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Mining Consultant Category in CLP'
    },
    {
        pair: 'Colombia-Mexico',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12 (Royalties)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Media Specialist Category in COP'
    },
    {
        pair: 'Peru-Spain',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Trade Advisor Category in PEN'
    },
    {
        pair: 'Philippines-United States',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 13 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Business Outsourcing Category in PHP'
    },
    {
        pair: 'Indonesia-Japan',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Energy Specialist Category in IDR'
    },
    {
        pair: 'Pakistan-United Kingdom',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Textile Lead Category in PKR'
    },
    {
        pair: 'Bangladesh-India',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Regional Lead Category in BDT'
    },
    {
        pair: 'Morocco-France',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tourism Lead Category in MAD'
    },
    {
        pair: 'Romania-Italy',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11 (Interest)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'IT Outsource Category in RON'
    },
    {
        pair: 'Bulgaria-Germany',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'EU Consultant Category in BGN'
    },
    {
        pair: 'Ukraine-Poland',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12 (Royalties)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Creative Talent Category in UAH'
    },
    {
        pair: 'Kazakhstan-Russia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10 (Dividends)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Regional Trade Category in KZT'
    },
    {
        pair: 'Qatar-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 11 (Finance)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Global Investor Category in QAR'
    },
    {
        pair: 'Switzerland-China',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 11 (Banking)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Financial Giant Category in CHF'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/intelligence/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/intelligence/page.tsx'\n\nUnterminated string constant");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowRightLeft
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowRightLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowRightLeft", [
    [
        "path",
        {
            d: "m16 3 4 4-4 4",
            key: "1x1c3m"
        }
    ],
    [
        "path",
        {
            d: "M20 7H4",
            key: "zbl0bi"
        }
    ],
    [
        "path",
        {
            d: "m8 21-4-4 4-4",
            key: "h9nckh"
        }
    ],
    [
        "path",
        {
            d: "M4 17h16",
            key: "g4d7ey"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-right-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript) <export default as ArrowRightLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRightLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Info
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Info", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
]);
;
 //# sourceMappingURL=info.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Info",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileSearch
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const FileSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("FileSearch", [
    [
        "path",
        {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3",
            key: "am10z3"
        }
    ],
    [
        "polyline",
        {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }
    ],
    [
        "path",
        {
            d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
            key: "ychnub"
        }
    ],
    [
        "path",
        {
            d: "m9 18-1.5-1.5",
            key: "1j6qii"
        }
    ]
]);
;
 //# sourceMappingURL=file-search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript) <export default as FileSearch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileSearch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clock
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shield
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Shield", [
    [
        "path",
        {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",
            key: "1irkt0"
        }
    ]
]);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BarChart3
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const BarChart3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("BarChart3", [
    [
        "path",
        {
            d: "M3 3v18h18",
            key: "1s2lah"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
]);
;
 //# sourceMappingURL=bar-chart-3.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-3.js [app-client] (ecmascript) <export default as BarChart3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-3.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookOpen
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("BookOpen", [
    [
        "path",
        {
            d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
            key: "vv98re"
        }
    ],
    [
        "path",
        {
            d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
            key: "1cyq3y"
        }
    ]
]);
;
 //# sourceMappingURL=book-open.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlertCircle
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const AlertCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("AlertCircle", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
;
 //# sourceMappingURL=alert-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_d2a464cd._.js.map