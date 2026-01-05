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
    // --- EXISTING DATA FROM JSON (50 ENTRIES) ---
    {
        pair: 'United States-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Corporate Executive Category in USD'
    },
    {
        pair: 'United States-Canada',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article XI',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Cross-border Professional Category in USD'
    },
    {
        pair: 'United Kingdom-United States',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 7',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech Founder Category in GBP'
    },
    {
        pair: 'Germany-United States',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Industrial Consultant Category in EUR'
    },
    {
        pair: 'Japan-United States',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Creative Artist Category in JPY'
    },
    {
        pair: 'Australia-United Kingdom',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Finance Specialist Category in AUD'
    },
    {
        pair: 'Singapore-Australia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Regional Director Category in SGD'
    },
    {
        pair: 'India-Singapore',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Software Architect Category in INR'
    },
    {
        pair: 'China-Hong Kong',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Arrangement',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Trade Partner Category in CNY'
    },
    {
        pair: 'Brazil-Portugal',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Expat Investor Category in BRL'
    },
    {
        pair: 'Spain-Mexico',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Commercial Lead Category in EUR'
    },
    {
        pair: 'Italy-France',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Design Consultant Category in EUR'
    },
    {
        pair: 'Norway-Sweden',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: 'Nordic Convention',
        status: 'Verified',
        notes: 'Nordic Talent Category in NOK'
    },
    {
        pair: 'Denmark-Finland',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 7',
        residency: 'Nordic Convention',
        status: 'Verified',
        notes: 'Green Tech Lead Category in DKK'
    },
    {
        pair: 'South Africa-United Kingdom',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Legal Advisor Category in ZAR'
    },
    {
        pair: 'UAE-India',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Strategic Investor Category in AED'
    },
    {
        pair: 'Saudi Arabia-United States',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Energy Consultant Category in SAR'
    },
    {
        pair: 'Israel-United States',
        dividend: '12.5%',
        interest: '12.5%',
        royalty: '12.5%',
        article: 'Article 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'R&D Director Category in ILS'
    },
    {
        pair: 'Turkey-Germany',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Export Manager Category in TRY'
    },
    {
        pair: 'South Korea-United States',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech Liaison Category in KRW'
    },
    {
        pair: 'Vietnam-Japan',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Manufacturing Lead Category in VND'
    },
    {
        pair: 'Malaysia-Singapore',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Regional Talent Category in MYR'
    },
    {
        pair: 'Thailand-Australia',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Business Partner Category in THB'
    },
    {
        pair: 'New Zealand-United States',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Agri-Tech Lead Category in NZD'
    },
    {
        pair: 'Ireland-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Digital Nomad Category in EUR'
    },
    {
        pair: 'Belgium-Netherlands',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'European Professional Category in EUR'
    },
    {
        pair: 'Austria-Germany',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'DACH Consultant Category in EUR'
    },
    {
        pair: 'Switzerland-France',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Private Wealth Category in CHF'
    },
    {
        pair: 'Poland-United Kingdom',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Software Engineer Category in PLN'
    },
    {
        pair: 'Czech Republic-Germany',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Logistics Expert Category in CZK'
    },
    {
        pair: 'Hungary-Austria',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech Specialist Category in HUF'
    },
    {
        pair: 'Greece-United Kingdom',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Shipping Magnate Category in EUR'
    },
    {
        pair: 'Egypt-UAE',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Project Manager Category in EGP'
    },
    {
        pair: 'Nigeria-United Kingdom',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Oil & Gas Expert Category in NGN'
    },
    {
        pair: 'Kenya-United States',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech Entrepreneur Category in KES'
    },
    {
        pair: 'Argentina-Spain',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Creative Director Category in ARS'
    },
    {
        pair: 'Chile-United States',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Mining Consultant Category in CLP'
    },
    {
        pair: 'Colombia-Mexico',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Media Specialist Category in COP'
    },
    {
        pair: 'Peru-Spain',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Trade Advisor Category in PEN'
    },
    {
        pair: 'Philippines-United States',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 13',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Business Outsourcing Category in PHP'
    },
    {
        pair: 'Indonesia-Japan',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Energy Specialist Category in IDR'
    },
    {
        pair: 'Pakistan-United Kingdom',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Textile Lead Category in PKR'
    },
    {
        pair: 'Bangladesh-India',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Regional Lead Category in BDT'
    },
    {
        pair: 'Morocco-France',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tourism Lead Category in MAD'
    },
    {
        pair: 'Romania-Italy',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'IT Outsource Category in RON'
    },
    {
        pair: 'Bulgaria-Germany',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'EU Consultant Category in BGN'
    },
    {
        pair: 'Ukraine-Poland',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Creative Talent Category in UAH'
    },
    {
        pair: 'Kazakhstan-Russia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Regional Trade Category in KZT'
    },
    {
        pair: 'Qatar-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Global Investor Category in QAR'
    },
    {
        pair: 'Switzerland-China',
        dividend: '5%',
        interest: '5%',
        royalty: '5%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Financial Giant Category in CHF'
    },
    // --- NEW STRATEGIC DATA (50 MORE ENTRIES) ---
    // Focus: Indonesia (IDN)
    {
        pair: 'United States-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Articles 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Standard US-IDN bilateral rates for 2026'
    },
    {
        pair: 'United Kingdom-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Articles 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Favorable UK investment corridor'
    },
    {
        pair: 'Singapore-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '8% / 10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Updated 2021',
        notes: 'High-traffic regional tax protocol'
    },
    {
        pair: 'Australia-Indonesia',
        dividend: '15%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Mining and infrastructure sector focus'
    },
    {
        pair: 'Germany-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Industrial and manufacturing priority'
    },
    {
        pair: 'Netherlands-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Holding company efficiency corridor'
    },
    {
        pair: 'France-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'European luxury and design services'
    },
    {
        pair: 'China-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Trade and construction equipment focus'
    },
    {
        pair: 'Hong Kong-Indonesia',
        dividend: '5%',
        interest: '10%',
        royalty: '5%',
        article: 'Arrangement',
        residency: '183 Days',
        status: 'Highly Favorable',
        notes: 'Optimized for APAC wealth management'
    },
    {
        pair: 'Malaysia-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Regional talent and digital mobility'
    },
    {
        pair: 'Switzerland-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Financial services and banking protocols'
    },
    {
        pair: 'Canada-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Natural resources and logistics focus'
    },
    {
        pair: 'South Korea-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tech and electronics sector focus'
    },
    {
        pair: 'India-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '182 Days',
        status: 'Verified',
        notes: 'Software engineering and IT focus'
    },
    {
        pair: 'Thailand-Indonesia',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Tourism and regional trade focus'
    },
    // Focus: Singapore (SGP)
    {
        pair: 'United States-Singapore',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'N/A (Exempt)',
        residency: '183 Days',
        status: 'Elite Status',
        notes: 'Highly optimized US-Singapore capital flow'
    },
    {
        pair: 'United Kingdom-Singapore',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'N/A (Exempt)',
        residency: '183 Days',
        status: 'Elite Status',
        notes: 'Standard UK-SGP fiscal efficiency'
    },
    {
        pair: 'Germany-Singapore',
        dividend: '5%',
        interest: '0%',
        royalty: '5%',
        article: 'Articles 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Industrial consulting efficiency'
    },
    {
        pair: 'France-Singapore',
        dividend: '5%',
        interest: '0%',
        royalty: '5%',
        article: 'Articles 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'European R&D and tech services'
    },
    {
        pair: 'Netherlands-Singapore',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'N/A (Exempt)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Holding company global standards'
    },
    {
        pair: 'Japan-Singapore',
        dividend: '5%',
        interest: '0%',
        royalty: '5%',
        article: 'Articles 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Creative and digital IP management'
    },
    {
        pair: 'China-Singapore',
        dividend: '5%',
        interest: '7%',
        royalty: '10%',
        article: 'Articles 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Mainland China trade connectivity'
    },
    {
        pair: 'Hong Kong-Singapore',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'N/A (Exempt)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Dual-hub wealth management efficiency'
    },
    {
        pair: 'Indonesia-Singapore',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10, 11, 12',
        residency: '183 Days',
        status: 'Active',
        notes: 'Standard regional outbound protocol'
    },
    {
        pair: 'Switzerland-Singapore',
        dividend: '5%',
        interest: '0%',
        royalty: '5%',
        article: 'Articles 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Elite financial and banking synergy'
    },
    // Focus: USA, Europe, and Global Corridors
    {
        pair: 'United States-Germany',
        dividend: '5%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Transatlantic industrial cooperation'
    },
    {
        pair: 'United States-France',
        dividend: '5%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'US-EU innovation and luxury trade'
    },
    {
        pair: 'United States-Netherlands',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'N/A (Exempt)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Global holding company gateway'
    },
    {
        pair: 'United States-Japan',
        dividend: '10%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'High-tech and robotics trade focus'
    },
    {
        pair: 'United States-Australia',
        dividend: '15%',
        interest: '10%',
        royalty: '5%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Resource and finance sector stability'
    },
    {
        pair: 'United States-Singapore',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'N/A (Exempt)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'APAC tech and financial gateway'
    },
    {
        pair: 'United States-India',
        dividend: '15%',
        interest: '15%',
        royalty: '15%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Standard',
        notes: 'Major IT and services corridor'
    },
    {
        pair: 'United Kingdom-Germany',
        dividend: '5%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Standard European industrial trade'
    },
    {
        pair: 'United Kingdom-France',
        dividend: '5%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Cross-channel financial synergy'
    },
    {
        pair: 'United Kingdom-Netherlands',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Logistics and trade efficiency'
    },
    {
        pair: 'United Kingdom-Singapore',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'N/A (Exempt)',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Global financial hub connectivity'
    },
    {
        pair: 'Germany-France',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'EU Directive',
        residency: '183 Days',
        status: 'Verified',
        notes: 'EU Parent-Subsidiary Directive efficiency'
    },
    {
        pair: 'Germany-United Kingdom',
        dividend: '5%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Industrial export-led protocol'
    },
    {
        pair: 'Germany-Singapore',
        dividend: '5%',
        interest: '0%',
        royalty: '5%',
        article: 'Articles 10, 11, 12',
        residency: '183 Days',
        status: 'Verified',
        notes: 'APAC manufacturing hub focus'
    },
    {
        pair: 'France-United Kingdom',
        dividend: '5%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Standard cross-channel services'
    },
    {
        pair: 'France-Germany',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'EU Directive',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Core EU fiscal integration'
    },
    {
        pair: 'Netherlands-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Trade and holding efficiency'
    },
    {
        pair: 'Netherlands-United States',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Global capital repatriation gateway'
    },
    {
        pair: 'Switzerland-United States',
        dividend: '5%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Wealth and private asset efficiency'
    },
    {
        pair: 'Switzerland-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Standard financial services hub'
    },
    {
        pair: 'Japan-United Kingdom',
        dividend: '0%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Creative and automotive trade focus'
    },
    {
        pair: 'China-United States',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Standard',
        notes: 'Global manufacturing baseline'
    },
    {
        pair: 'Australia-Singapore',
        dividend: '10%',
        interest: '10%',
        royalty: '10%',
        article: 'Article 11',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Resource and regional trade focus'
    },
    {
        pair: 'Canada-United Kingdom',
        dividend: '5%',
        interest: '0%',
        royalty: '0%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Commonwealth trade stability'
    },
    {
        pair: 'Australia-United States',
        dividend: '15%',
        interest: '10%',
        royalty: '5%',
        article: 'Article 10',
        residency: '183 Days',
        status: 'Verified',
        notes: 'Standard resource trade baseline'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/tax-treaty/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaxTreatyDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$treaties$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/treaties.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function TaxTreatyDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TaxTreatyDetailPage.useMemo[data]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$treaties$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treatyData"].find({
                "TaxTreatyDetailPage.useMemo[data]": (t)=>{
                    const [source, target] = t.pair.split('-');
                    const generatedSlug = `tax-treaty-${source.toLowerCase().replace(/\s+/g, '-')}-to-${target.toLowerCase().replace(/\s+/g, '-')}`;
                    return generatedSlug === slug;
                }
            }["TaxTreatyDetailPage.useMemo[data]"]);
        }
    }["TaxTreatyDetailPage.useMemo[data]"], [
        slug
    ]);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-[#FDFCFB] font-serif italic text-gray-400",
        children: "Jurisdictional data not found in public registry."
    }, void 0, false, {
        fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
    const [sourceName, targetName] = data.pair.split('-');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FDFCFB] text-black pb-32 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto pt-24 pb-12 px-8 text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.4em]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            " Official 2026 Registry Data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-serif italic leading-tight text-black",
                        children: [
                            sourceName,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#D4AF37]",
                                children: "to"
                            }, void 0, false, {
                                fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                lineNumber: 41,
                                columnNumber: 24
                            }, this),
                            " ",
                            targetName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl mx-auto text-gray-400 font-light italic text-[17px] leading-relaxed",
                        children: "Technical analysis of bilateral Withholding Tax (WHT) instruments under the global 2026 fiscal framework."
                    }, void 0, false, {
                        fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-5xl mx-auto px-8 mb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border border-gray-100 rounded-[4rem] overflow-hidden shadow-2xl shadow-gray-100/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-12 space-y-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black uppercase tracking-widest text-gray-400",
                                            children: "Dividends"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-6xl font-serif italic text-black",
                                            children: data.dividend
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-12 space-y-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black uppercase tracking-widest text-gray-400",
                                            children: "Interest"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-6xl font-serif italic text-black",
                                            children: data.interest
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-12 space-y-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-black uppercase tracking-widest text-gray-400",
                                            children: "Royalties"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-6xl font-serif italic text-black",
                                            children: data.royalty
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 bg-gray-50/50 border-t border-gray-100 divide-x divide-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "text-[#D4AF37]",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-black uppercase tracking-widest text-gray-400",
                                                    children: "Residency Clause"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] font-serif italic text-black",
                                                    children: data.residency
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "text-[#D4AF37]",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-black uppercase tracking-widest text-gray-400",
                                                    children: "Primary Article"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] font-serif italic text-black",
                                                    children: data.article
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto px-8 space-y-16 text-left border-t border-gray-100 pt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-gold max-w-none text-gray-600 font-light leading-relaxed text-[17px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-serif italic text-black mb-10 underline decoration-[#D4AF37] decoration-2 underline-offset-8",
                            children: [
                                "Technical Fiscal Review: ",
                                sourceName,
                                " — ",
                                targetName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6",
                            children: [
                                "The tax treaty between ",
                                sourceName,
                                " and ",
                                targetName,
                                " serves as the definitive legal instrument for mitigating double taxation and clarifying the jurisdictional right to tax cross-border income. Under the 2026 fiscal guidelines, withholding taxes for dividends are optimized at ",
                                data.dividend,
                                ", providing a competitive advantage for entities domiciled in ",
                                sourceName,
                                " seeking to repatriate capital."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 italic",
                            children: [
                                "Article ",
                                data.article,
                                " of the agreement provides the primary framework for interest and royalty flows. In the current global climate of Pillar Two minimum taxation, understanding the interplay between this treaty and domestic statutory laws is paramount for professional tax compliance."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black rounded-[3rem] p-12 text-white shadow-2xl my-16 border border-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "text-[#D4AF37]",
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-serif italic",
                                            children: "AI Simulation Case Study"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 font-light text-gray-300 italic",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Scenario:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this),
                                                " A corporate entity in ",
                                                sourceName,
                                                " is paying $250,000 in software royalties to a service provider in ",
                                                targetName,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Baseline Result:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                " Without the treaty, the statutory rate could reach 20%. Under the ",
                                                data.pair,
                                                " DTAA, the effective rate is reduced to ",
                                                data.royalty,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm border-l-2 border-[#D4AF37] pl-6 py-2",
                                            children: "This is a standardized reference. For a detailed legal breakdown, run this exact scenario in the AI Tax Vault."
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/ai-vault",
                                    className: "mt-10 inline-flex items-center gap-3 bg-[#D4AF37] text-black px-10 py-5 rounded-2xl font-black uppercase text-[12px] tracking-[0.2em] hover:bg-white transition-all shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 16
                                        }, this),
                                        " Execute in AI Vault"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-serif italic text-black mt-12 mb-6",
                            children: "Compliance & Administrative Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6",
                            children: "Qualifying for the preferential rates listed above requires strict adherence to administrative procedures. Key requirements include:"
                        }, void 0, false, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc pl-8 space-y-4 mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Certificate of Residence (CoR):"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        " Must be issued by the competent authority in ",
                                        sourceName,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Beneficial Ownership (BO) Test:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        " The recipient must prove they are the actual owner of the income stream."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                "Article ",
                                                data.article,
                                                " Filing:"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        " Specific declaration forms (e.g., Form DGT or Form 17) must be submitted before the first payment."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 italic text-[14px]",
                            children: [
                                "*Reference Note: ",
                                data.notes,
                                ". Data verified against 2026 OECD jurisdictional registries."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tax-treaty/[slug]/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(TaxTreatyDetailPage, "pj0vvRK84mBCGN1f7nQf/Z/8BRg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = TaxTreatyDetailPage;
var _c;
__turbopack_context__.k.register(_c, "TaxTreatyDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
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
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
/**
 * lucide-react v0.284.0 - ISC
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
            key: "17u4zn"
        }
    ],
    [
        "path",
        {
            d: "M5 3v4",
            key: "bklmnn"
        }
    ],
    [
        "path",
        {
            d: "M19 17v4",
            key: "iiml17"
        }
    ],
    [
        "path",
        {
            d: "M3 5h4",
            key: "nem4j1"
        }
    ],
    [
        "path",
        {
            d: "M17 19h4",
            key: "lbex7p"
        }
    ]
]);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_bac450d7._.js.map