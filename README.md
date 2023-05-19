# ajv-memleak

- Node version: 18.16.0
- ajv@8.11.0

Having unscoped ajv instance leaks memory

```
node --expose-gc leaking.js 
Heap allocated 0.01 GB
Heap allocated 0.18 GB
Heap allocated 0.46 GB
Heap allocated 0.59 GB
Heap allocated 0.75 GB
Heap allocated 0.88 GB
Heap allocated 1.01 GB
Done
Heap allocated 1.11 GB
Heap allocated 1 GB
Heap allocated 1 GB
Heap allocated 1 GB
Heap allocated 1 GB
^C
```

Having scoped ajv instance is okish.
```
node --expose-gc nonleaking.js
Heap allocated 0.01 GB
Heap allocated 0.17 GB
Heap allocated 0.43 GB
Heap allocated 0.58 GB
Heap allocated 0.72 GB
Heap allocated 0.82 GB
Heap allocated 0.99 GB
Heap allocated 1.08 GB
Done
Heap allocated 1.03 GB
Heap allocated 0.04 GB
Heap allocated 0.04 GB
Heap allocated 0.04 GB
Heap allocated 0.04 GB
Heap allocated 0.04 GB
Heap allocated 0.04 GB
^C
```

Related: https://github.com/ajv-validator/ajv/issues/1720