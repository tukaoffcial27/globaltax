module.exports = [
"[project]/data/treaties.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/encyclopedia/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EncyclopediaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
// Mempertahankan import data sesuai file asli Anda
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$treaties$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/treaties.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function EncyclopediaPage() {
    /**
   * PERBAIKAN FATAL: generateSlug
   * Fungsi ini diubah agar melakukan .trim() pada nama negara.
   * Ini memastikan link "United States - Indonesia" menjadi "...-united-states-to-indonesia"
   * bukannya "...-united-states--to-indonesia" (double dash) yang menyebabkan 404.
   */ const generateSlug = (pair)=>{
        if (!pair) return '#';
        // Menggunakan regex untuk mendukung berbagai jenis tanda hubung (dash)
        const parts = pair.split(/[-–—]/);
        if (parts.length < 2) return '#';
        // Melakukan trim() untuk membuang spasi yang menyebabkan link rusak
        const source = parts[0].trim().toLowerCase().replace(/\s+/g, '-');
        const target = parts[1].trim().toLowerCase().replace(/\s+/g, '-');
        return `/tax-treaty/tax-treaty-${source}-to-${target}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FDFCFB] text-black pb-32 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto pt-24 pb-16 px-8 text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.4em]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/encyclopedia/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            " Global Jurisdictional Index"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/encyclopedia/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-serif italic leading-tight text-black",
                        children: [
                            "Tax Treaty ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#D4AF37]",
                                children: "Encyclopedia."
                            }, void 0, false, {
                                fileName: "[project]/app/encyclopedia/page.tsx",
                                lineNumber: 39,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/encyclopedia/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl mx-auto text-gray-400 font-light italic text-[17px] leading-relaxed",
                        children: "The 2026 definitive directory of bilateral tax instruments. Access comprehensive data for 100+ strategic global corridors."
                    }, void 0, false, {
                        fileName: "[project]/app/encyclopedia/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/encyclopedia/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$treaties$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["treatyData"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: generateSlug(item.pair),
                            className: "group bg-white border border-gray-100 p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col justify-between space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    className: "text-[#D4AF37] opacity-40",
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/app/encyclopedia/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-1 bg-gray-50 rounded-full text-[9px] font-black uppercase tracking-widest text-gray-400",
                                                    children: "2026 Update"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/encyclopedia/page.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/encyclopedia/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-serif italic text-black leading-tight group-hover:text-[#D4AF37] transition-colors",
                                            children: [
                                                item.pair.split(/[-–—]/)[0]?.trim(),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/encyclopedia/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 57
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300 mx-1",
                                                    children: "to"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/encyclopedia/page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/encyclopedia/page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 66
                                                }, this),
                                                item.pair.split(/[-–—]/)[1]?.trim()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/encyclopedia/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/encyclopedia/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pt-4 border-t border-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-black uppercase tracking-widest text-gray-400",
                                            children: "View Treaty Details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/encyclopedia/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-black text-[#D4AF37] rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/encyclopedia/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/encyclopedia/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/encyclopedia/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/encyclopedia/page.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/encyclopedia/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/encyclopedia/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto mt-32 px-8 text-center border-t border-gray-100 pt-20 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                        className: "mx-auto text-gray-100",
                        size: 48
                    }, void 0, false, {
                        fileName: "[project]/app/encyclopedia/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-[14px] font-black uppercase tracking-[0.4em] text-gray-300",
                        children: "Comprehensive Metadata Archive"
                    }, void 0, false, {
                        fileName: "[project]/app/encyclopedia/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[15px] text-gray-400 leading-relaxed italic font-light",
                        children: "This encyclopedia serves as a public repository for standardized withholding tax rates across international borders. By indexing 100+ jurisdictional pairs, GlobalTax Laboratory provides a professional-grade reference for corporate executives, software architects, and legal specialists navigating the 2026 fiscal landscape."
                    }, void 0, false, {
                        fileName: "[project]/app/encyclopedia/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/encyclopedia/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/encyclopedia/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_1c14d6d9._.js.map