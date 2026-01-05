import json
import random

# 1. Daftar 50 Profesi Lengkap
professions = [
    "Remote Software Engineer", "Digital Nomad Freelancer", "Expat Airline Pilot", "Crypto Trader",
    "Offshore Oil Worker", "Maritime Crew", "E-commerce Seller", "Management Consultant",
    "International Doctor", "Academic Researcher", "Professional Athlete", "Social Media Influencer",
    "Startup Founder", "Real Estate Investor", "Airline Flight Attendant", "International School Teacher",
    "Foreign Service Officer", "NGO Humanitarian Worker", "Architectural Consultant", "Cyber Security Analyst",
    "Data Scientist", "Private Equity Associate", "Fintech Product Manager", "Travel Nurse",
    "Yacht Crew Member", "Professional Poker Player", "Foreign Property Manager", "International Model",
    "Renewable Energy Engineer", "Telemedicine Provider", "Online Course Creator", "Gaming Pro/Esports",
    "Import/Export Agent", "UX Designer", "Cloud Architect", "Intellectual Property Lawyer",
    "Financial Auditor", "Translation Specialist", "Mining Engineer", "Construction Project Manager",
    "Art Dealer", "Event Planner", "Bio-Tech Researcher", "Venture Capitalist", "Hedge Fund Manager",
    "Marketing Agency Owner", "UX Researcher", "Blockchain Developer", "Cybersecurity Consultant",
    "Sustainability Specialist"
]

# 2. Daftar 20 Masalah Pajak (Pain Points)
pain_points = [
    "Double Taxation Avoidance", "Tax Residency Optimization", "Capital Gains Tax on Exit",
    "Remote Work Tax Nexus Risk", "Social Security Contributions", "Permanent Establishment Avoidance",
    "Foreign Earned Income Exclusion", "Tax-Efficient Salary Packaging", "Estate Planning",
    "VAT Compliance Risk", "Crypto Asset Reporting", "CFC Rules", "Transfer Pricing",
    "Self-Employment Tax Mitigation", "Wealth Tax Exemptions", "Dividend Withholding",
    "IP Royalty Taxes", "Pension Portability", "Digital Service Tax", "Offshore Trust Compliance"
]

# 3. Daftar 10 Negara Target
countries = [
    "USA", "Indonesia", "Singapore", "UK", "Canada", 
    "UAE", "Japan", "Germany", "Australia", "Switzerland"
]

data = []

# Loop untuk menggenerasi matriks 10.000 data
for country in countries:
    for prof in professions:
        for pain in pain_points:
            # Pola Pair: [Profesi] in [Negara] - [Masalah Pajak]
            pair_name = f"{prof} in {country} - {pain}"
            
            # Menggenerasi data teknis simulasi untuk 2026
            data.append({
                "pair": pair_name,
                "dividend": random.choice(["0%", "5%", "10%", "15%"]),
                "interest": random.choice(["0%", "5%", "10%"]),
                "royalty": random.choice(["5%", "8%", "10%"]),
                "residency": f"{country} Fiscal Resident",
                "article": f"Article {random.randint(1, 30)}",
                "notes": f"Specialized 2026 fiscal roadmap for {prof} entities addressing {pain} in {country} jurisdiction."
            })

# Simpan ke folder data/treaties.json
with open('data/treaties.json', 'w') as f:
    json.dump(data, f, indent=2)

print(f"--- GENERASI BERHASIL ---")
print(f"Total entri baru: {len(data)}")
print(f"Lokasi file: data/treaties.json")