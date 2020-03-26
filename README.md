# Keyfinder :mag_right:
Chord identifier based in data combinations.

## About versions
Keyfinder is available in two modes:
   1. API only
      - **Requires**:
         - Modify `config.json` on _master_ folder to make required changes below
         - Need a connection with _master database_ to compare data. Set this up in the next steps:
         - Generate the API Token (use `node generate_token` on master to generate a permanent database access key and replace this on `config.json`)
         - Don't forgot to send the _generated token_ on the future requests headers (you can use (axios)[https://github.com/axios/axios] to send data for API)
         
   2. Complete app
      - **Includes**:
         - Full application template
         - Pre-established settings
      - **Requires**:
         - All the steps in the previous topic are need to make database connection

## How it works (Client-side application)
1. Insert your chord combination in piano box :musical_keyboard:
   ### Attention to:
   - The representation of the chord needs to be clear for a good search
   - Wrong combinations can return inaccurate results
   
2. Send data to server (API) and wait for results
