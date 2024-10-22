# Yield Yak Strategies Subgraph(s)

### How to add new strategies

In order to add new strategies you need to edit the JSON file(s) in the `config` folder.

Add the information at the top of the relevant array (most likely `strategiesV4`) and then also update the `graft` information so that you can copy data from a previous subgraph instead of reloading from scratch. The `block` should be one before the block in which the earliest of the new strategies you are adding was deployed, and `blockPlusOne` will be the block in which that earliest strategy was deployed. Doing this ensures that the `handleOnce` function in the mappings file will run again and that new sources will be created using the templates.