const sp = 67.83643;
const rj = 36.67866;
const mg = 29.22988;
const es = 27.16548;
const outros = 19.84953;

const total = (sp + rj + mg + es + outros);

const percentualSp = ((sp / total) * 100);
const percentualRj = ((rj / total) * 100);
const percentualMg = ((mg / total) * 100);
const percentualEs = ((es / total) * 100);
const percentualOutros = ((outros / total) * 100);

document.writeln(`O percentual de SP foi de  %${percentualSp.toFixed(2)} \n`)
document.write(`O percentual de RJ foi de  %${percentualRj.toFixed(2)} \n`)
document.write(`O percentual de MG foi de  %${percentualMg.toFixed(2)} \n`)
document.write(`O percentual de ES foi de  %${percentualEs.toFixed(2)} \n`)
document.write(`O percentual de Outros foi de  %${percentualOutros.toFixed(2)}`)
