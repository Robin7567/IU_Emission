from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CO2 Emission API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

emissions_data = [
    {"country": "Deutschland", "company": "BASF", "sector": "Chemie", "emissions": 18.2},
    {"country": "Deutschland", "company": "Volkswagen", "sector": "Automobil", "emissions": 22.5},
    {"country": "Deutschland", "company": "RWE", "sector": "Energie", "emissions": 30.1},

    {"country": "Frankreich", "company": "TotalEnergies", "sector": "Energie", "emissions": 28.7},
    {"country": "Frankreich", "company": "Renault", "sector": "Automobil", "emissions": 12.4},

    {"country": "USA", "company": "ExxonMobil", "sector": "Energie", "emissions": 45.3},
    {"country": "USA", "company": "Tesla", "sector": "Automobil", "emissions": 4.1},
    {"country": "USA", "company": "Amazon", "sector": "Logistik", "emissions": 16.7},

    {"country": "China", "company": "Sinopec", "sector": "Energie", "emissions": 51.2},
    {"country": "China", "company": "BYD", "sector": "Automobil", "emissions": 11.6},
    {"country": "China", "company": "Alibaba", "sector": "Digital", "emissions": 9.3},

    {"country": "Indien", "company": "Tata Steel", "sector": "Industrie", "emissions": 34.8},
    {"country": "Indien", "company": "Reliance Industries", "sector": "Energie", "emissions": 38.9},

    {"country": "Brasilien", "company": "Petrobras", "sector": "Energie", "emissions": 26.4},
    {"country": "Brasilien", "company": "Vale", "sector": "Bergbau", "emissions": 19.2},

    {"country": "Japan", "company": "Toyota", "sector": "Automobil", "emissions": 14.7},
    {"country": "Japan", "company": "Mitsubishi Heavy Industries", "sector": "Industrie", "emissions": 21.3},
]

@app.get("/api/emissions")
def get_emissions():
    return emissions_data