import { defangingIPadd } from "./defangingAnIPaddress";

it('"1.1.1.1" returns "1[.]1[.]1[.]1"', () => {
    const address = "1.1.1.1";
    const result = defangingIPadd(address);
    expect(result).toBe("1[.]1[.]1[.]1");
});

it('"1.2.3.40" returns "1[.]2[.]3[.]40"', () => {
    const address = "1.2.3.40";
    const result = defangingIPadd(address);
    expect(result).toBe("1[.]2[.]3[.]40");
});

it('"10.0.0.8" returns "10[.]0[.]0[.]8"', () => {
    const address = "10.0.0.8";
    const result = defangingIPadd(address);
    expect(result).toBe("10[.]0[.]0[.]8");
});

it('"127.255.255.255" returns "127[.]255[.]255[.]255"', () => {
    const address = "127.255.255.255";
    const result = defangingIPadd(address);
    expect(result).toBe("127[.]255[.]255[.]255");
});

it('"172.16.0.0" returns "17;2[.]16[.]0[.]0"', () => {
    const address = "172.16.0.0";
    const result = defangingIPadd(address);
    expect(result).toBe("172[.]16[.]0[.]0");
});

it('"191.255.255.255" returns "191[.]255[.]255[.]255"', () => {
    const address = "191.255.255.255";
    const result = defangingIPadd(address);
    expect(result).toBe("191[.]255[.]255[.]255");
});

it('"192.168.0.0" returns "192[.]168[.]0[.]0"', () => {
    const address = "192.168.0.0";
    const result = defangingIPadd(address);
    expect(result).toBe("192[.]168[.]0[.]0");
});

it('"223.255.255.145" returns "223[.]255[.]255[.]145"', () => {
    const address = "223.255.255.145";
    const result = defangingIPadd(address);
    expect(result).toBe("223[.]255[.]255[.]145");
});

it('"225.100.50.0" returns "225[.]100[.]50[.]0"', () => {
    const address = "225.100.50.0";
    const result = defangingIPadd(address);
    expect(result).toBe("225[.]100[.]50[.]0");
});

