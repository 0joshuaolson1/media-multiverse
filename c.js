n=5e8;r=(c,m)=>u=>fetch(u='https://'+u,m).then(r=>r.text()).then(t=>c(u,t));c=l=>r((_,t)=>{e=0;E=1;eval('_='+t).data.map(N=>{e=e%n+E*N;E*=256;e<E-E%n?(r((u,t,b=atob(t.slice(27,-26)),o=b.search(''))=>~b?new Set(b.substr(o+6,b.charCodeAt(o+4)-1).split('').map(d=>d.slice(d[1]=='*'?3:1))).forEach(r(open,{method:'HEAD'})):open(u))('crt.sh/?d='+e%n),e=e/n|0,E=E/n|0):E%=n})})('qrng.anu.edu.au/API/jsonI.php?type=uint8&length='+l)
