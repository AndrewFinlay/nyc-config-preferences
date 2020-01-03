# Example showing better handling of config preferences in newer version of nyc

To run the example:
```
npm install
npm t
```

#### Expected behaviour:  
Runs `nyc instrument...` command multiple times using different config sources each time.
Each run will produce an instrumented output folder with contents determined by the config.
Tap tests the results against snapshots of the folder structure
