@echo off
cd public & open http://localhost:8000 & python -m http.server 8000 & cd ..
