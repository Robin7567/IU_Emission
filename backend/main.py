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
    {"country": "Germany", "company": "Example AG", "sector": "Automotive", "emissions": 120.5},
    {"country": "USA", "company": "Example Corp", "sector": "Energy", "emissions": 300.2},
]

@app.get("/api/emissions")
def get_emissions():
    return emissions_data