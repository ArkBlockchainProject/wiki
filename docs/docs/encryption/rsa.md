# RSA 算法（Rivest-Shamir-Adleman）

## 简介

RSA 是一种非对称加密算法，具有以下特点：

1.  **非对称加密：** RSA 使用一对公钥和私钥来进行加密和解密。数据可以用公钥加密，但只能用私钥解密；反之亦然。这种非对称性使得数据的安全传输成为可能。
2.  **数字签名：** RSA 也用于数字签名，通过使用私钥对消息进行签名，验证者可以使用公钥来验证签名的真实性和消息的完整性。

在区块链中，RSA 算法与以下方面相关：

1.  **数据隐私和加密：** 在区块链上，敏感数据可以使用 RSA 算法进行加密，以确保只有授权的用户可以解密和访问数据。这在保护个人隐私和机密性方面很有用。
2.  **数字签名：** 区块链上的交易和信息可以通过数字签名来验证其真实性。发送者可以使用其私钥对交易进行签名，接收者使用发送者的公钥来验证签名，确保交易未被篡改。
3.  **身份认证：** RSA 算法可用于实现身份认证和授权机制，帮助区块链网络中的参与者进行安全通信和交互。
4.  **安全密钥生成和管理：** 区块链中的节点和参与者可能需要生成和管理安全密钥，用于加密和签名。RSA 算法可用于生成这些密钥对。
5.  **密码学哈希函数：** **虽然 RSA 算法本身不是用于哈希函数的，但它在区块链中可能与哈希函数一起用于创建数字指纹，以及在某些场景下用于地址生成。**

需要注意的是，随着区块链技术的发展，其他加密算法和机制也得到广泛应用，如椭圆曲线加密（ECC）等。因此，RSA 不是唯一的加密和签名选择，但在某些情况下，它仍然是重要的安全工具之一。

## RSA 背后的数学原理与深入解析

::: tip 请注意
虽然是基础内容，但是这一部分十分重要，请不要跳过！
:::
首先我们需要知道 RSA 算法运作时的步骤：

> 我们把这部分成为 A

- **密钥生成阶段**
- **加密阶段**
- **解密阶段**

**对于关键的数学原理，主要涉及到下面几个方面：**

> 同样的，我们把这部分成为 B

- **模运算**：在 RSA 中，所有的运算都在模 n 的情况下进行，这意味着计算结果只保留余数部分。
- **欧拉函数**：对于任意正整数 n，欧拉函数 φ(n)表示小于 n 且与 n 互质的正整数的个数。
- **模反元素**：对于整数 a 和 n，a 关于模 n 的乘法逆元是指整数 x，满足 a \* x ≡ 1 (mod n)。在 RSA 中，计算出 e 的模反元素 d 用于解密。
- **费马小定理**：费马小定理是 RSA 算法的基础之一。它表述为：如果 p 是一个素数，a 是不可被 p 整除的整数，那么 a^(p-1) ≡ 1 (mod p)。
- **模指数运算**：RSA 算法涉及到大数的模指数运算，即计算 (base^exponent) mod modulus 的结果。

我们来逐一攻破。

###

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#a-bu-fen)

A 部分

####

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#mi-yue-sheng-cheng-jie-duan)

####

**密钥生成阶段**

在 RSA 算法的密钥生成阶段，它选择了**两个大素数 p 和 q，**计算它们的乘积 n。然后选择一个整数 e（通常为 65537），确保它与(n)的欧拉函数 φ(n)互质。接着，计算 e 的模反元素 d，使得 e \* d ≡ 1 (mod φ(n))。最终，**得到公钥(n, e)和私钥(n, d)**。

我们用数学公式表达出来，就非常显而易见了：

p≠qp ≠ qp\=q **选择两个不同的大素数 p 和 q**

n\=p∗qn = p \* qn\=p∗q **密钥生成阶段中计算 n**

φ(n)\=(p−1)∗(q−1)φ(n) = (p - 1) \* (q - 1)φ(n)\=(p−1)∗(q−1) **计算欧拉函数**

1<e<φ(n)1 < e < φ(n)1<e<φ(n) **选择一个加密指数 e，并且满足 latex 中的条件**

e∗d≡1(modφ(n)) e \* d ≡ 1 (mod φ(n))e∗d≡1(modφ(n)) **计算 e 的模反元素 d，满足需求**

####

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#jia-mi-jie-duan)

####

**加密阶段**

在加密的时候，我们只需要接触一个公式：

c\=memodnc = m^e mod nc\=memodn

乍一看十分复杂，我来为你一一展开。

还记得我们之前的**一对相关联的密钥**吗？这就是关键！在加密阶段，要加密一条消息 m 的话，就需要使用公钥(n, e)。根据计算密文的公式 c = m^e mod n，加密后，**这个密文可以被发送给接收者，而只有私钥才能解密它。**

####

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#jie-mi-bu-zhou)

####

**解密步骤**

在最后的解密步骤中，**我们只需要具备逆向思维，并使用一个关键的公式：**

m\=cdmodnm = c^d mod nm\=cdmodn

来计算出原始消息。具体的步骤是这样的：

- 接收到密文 c。
- 使用私钥(n, d)计算原始消息**m = c^d mod n**。

###

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#b-bu-fen)

###

B 部分

对于 B 部分，由于涉及的内容比较多，我们就将它拆解为多个模块。

####

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#id-1.-mo-yun-suan)

####

**1\. 模运算**

**1.1 简介：**

在 RSA 中，模运算被广泛用于生成密钥、加密和解密数据。模运算在数字领域中的作用类似于时钟上的取余操作。

**1.2 我们来举一个例子深入解析：**

假设：**有两个正整数 a 和 n（其中 n > 1），模运算 a 模 n（通常表示为 a mod n）的结果是余数，即 a 除以 n 的余数。**

按照 RSA 模运算的步骤，我们首先要进行：

- **首先选择两个大素数 p 和 q，**这样做的用处就是**生成 RSA 密钥。**这时候你就可能疑问了，为什么可以直接生成？这是因为我们前面提到的模数计算，而且它们的乘积 n = p \* q **本身就是模数**，所以它会出现在加密和解密的运算中。
- 然后我们计算上面提到的**模数 n：直接**将两个素数**相乘**得到模数 n。
- 然后**计算欧拉函数 φ(n)：注意：**欧拉函数表示**小于 n 且与 n 互质的正整数的个数。**对于素数 p 和 q，**用公式这样表达：**φ(n) = (p - 1) \* (q - 1)
- 之后就是**选择加密指数 e：**加密指数是一个**小于 φ(n) 且与 φ(n) 互质的整数，我们**通常选择一个**较小的素数**，如 114514。
- 随后紧接着就是**计算解密指数 d：**解密指数 d 是 e 模 φ(n) 的**乘法逆元**，也就是说，d 是一个整数，并且**满足 (d \* e) mod φ(n) = 1**。
- **加密和解密：上文已经提到。**

模运算已经接近尾声，我们再来回顾一下主要作用：**它确保了加密和解密的正确性。RSA 算法的安全性依赖于大整数分解问题，即找到给定 n 的素因子 p 和 q 的难度。只有知道 p 和 q 才能有效地解密密文，因此保证了数据的机密性。**

####

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#id-2.-ou-la-han-shu)

####

**2\. 欧拉函数**

**2.1 简介：**

欧拉函数，也称为 φ 函数（phi 函数），在数论中扮演着重要的角色。对于一个正整数 n，欧拉函数 φ(n) 定义为小于等于 n 且与 n 互质的正整数的个数。具体而言，**φ(n) 表示了在 1 到 n 之间与 n 互质的数的个数。**

**2.2 理论基础：**

欧拉函数涉及到了下面两个定理：

- 唯一分解定理：每个大于 1 的正整数可以唯一地表示为一系列质数的乘积，顺序不同不影响结果。这个定理为计算欧拉函数提供了基础，因为可以将**一个正整数 n 分解为其质因数的乘积。**
- 贝祖定理：贝祖定理指出，对于任意的两个互质正整数 a 和 b，**存在整数 x 和 y，使得 ax + by = 1**。这个定理在证明欧拉函数的性质时可能会用到。

这两个定理是欧拉函数的基础，这里只给出了重要的内容。

**2.3 数学原理和背后的性质：**

**2.3.1 首先是性质：**

- 如果 p 是一个质数，那么 φ(p) = p - 1。这是因为质数与小于它的所有正整数都互质。
- 对于两个互质的正整数 a 和 b，有 φ(ab) = φ(a) \* φ(b)。这是一个重要的性质，可以通过考虑每个与 a 互质的数与每个与 b 互质的数的组合来证明。
- 对于正整数 n，有 Σ(φ(d)) = n，其中求和是在所有 n 的正因数 d 上进行的。这个性质的证明可以利用欧拉函数的定义和乘法原理。

**2.3.2** 现在，我们来深入的理解它的涵义和数学原理：首先我们要知道**欧拉函数的计算方法可以利用唯一分解定理。**

唯一分解定理的思想是：**对于每个质因数 pi，将它的贡献用 1 - 1/p1 来表示，即排除了 pi 的倍数，剩余的部分就是与 pi 互质的数的比例。**例如我们要把 n 分解为其质因数的乘积，就可以用公式这样理解：

n\=p1a1∗p2a2∗...∗pkakn = p1^a1 \* p2^a2 \* ... \* pk^akn\=p1a1∗p2a2∗...∗pkak

其中 **p1, p2, ..., pk 是不同的质数**，**a1, a2, ..., ak 是它们的指数。**同样的，欧拉函数可以用类似的方式表达：

φ(n)\=n∗(1−1/p1)∗(1−1/p2)∗...∗(1−1/pk)φ(n) = n \* (1 - 1/p1) \* (1 - 1/p2) \* ... \* (1 - 1/pk)φ(n)\=n∗(1−1/p1)∗(1−1/p2)∗...∗(1−1/pk)

**2.4 依然有些困难？我们来举例子看看：**

- 假设要计算 φ(12)。首先分解 12 为 2^2 \* 3^1，然后使用公式计算：

  φ(12) = 12 \* (1 - 1/2) \* (1 - 1/3) = 12 \* 1/2 \* 2/3 = 4

- 假设要计算 φ(15)。分解 15 为 3^1 \* 5^1，然后使用公式计算：

  φ(15) = 15 \* (1 - 1/3) \* (1 - 1/5) = 15 \* 2/3 \* 4/5 = 8

- 假设要计算 φ(36)。分解 36 为 2^2 \* 3^2，然后使用公式计算：

  φ(36) = 36 \* (1 - 1/2) \* (1 - 1/3) = 36 \* 1/2 \* 2/3 = 12

通过这些例子，我们可以生动的理解欧拉函数的计算过程，并且更清楚地了解它在区块链中的作用。

有关欧拉函数的部分已经接近尾声，我们来回顾一下它在区块链中的主要作用：**欧拉函数在公钥密码学中扮演重要角色，例如 RSA 加密算法中的密钥生成和加密过程中涉及到欧拉函数的计算。**

####

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#id-3.-mo-fan-yuan-su)

####

**3\. 模反元素**

**3.1 简介：**

模反元素，又称模反演元素，是指一个数论中的概念。

**3.2 数学原理**

对于模反元素背后的数学原理，我们可以用一个例子去说明：**给定一个正整数 n，我们希望找到一个整数 a，使得 a 与 n 互质（最大公约数为 1），同时满足以下条件：**

1.  a 与 b 模 n 同余：即 a ≡ b (mod n)。
2.  a 与 b 的乘积模 n 等于 1：即 a \* b ≡ 1 (mod n)。

如果满足上述条件，那么**a 就是模反元素**。在这个情况下，**b 也通常是 a 在模 n 下的模反元素。**

**3.3 欧几里得算法**

模反元素的寻找涉及到扩展欧几里得算法，**这是一个用于求解线性同余方程的算法**。关于欧几里得算法中的线性方程，简要的理解为就是：**形如 ax ≡ b (mod n)的方程（其中 a、b 和 n 都是整数，而 x 是未知数。）**

**欧几里得算法不单单可以求解方程，还可以寻找模反元素。**我们来简要的介绍一下相关步骤：

1.  首先，使用欧几里得算法求出 a 和 n 的最大公约数 d。
2.  然后，使用扩展欧几里得算法求出一对整数 x 和 y，使得 ax + ny = d。

此时，我们定义 d = 1，那么久意味着 a 与 n 互质，**而 x 就是 a 在模 n 下的模反元素**。这是因为**ax + ny = 1**，**两边同时取模 n**后得到**ax ≡ 1 (mod n)，满足模反元素的定义。**

模反元素的内容非常简单，那么现在，我们来回顾一下它的作用：**在 RSA 算法中，模反元素被用来生成密钥对、进行加解密操作以及数字签名等。**

####

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#id-4.-fei-ma-xiao-ding-li)

####

**4\. 费马小定理**

**4.1 简介**

费马小定理是数论中的一个重要定理，该定理表述为：如果 p 是一个素数，a 是一个不被 p 整除的整数，那么 a^(p-1)除以 p 的余数等于 1。换句话说，a^(p-1)与 p 同余于 1，记作 a^(p-1) ≡ 1 (mod p)。

**4.2 数学原理**

针对费马小定理的数学原理涉及到模运算和群论的概念，在这里我们先来讲述一下群论和模运算的概念：

1.  **模运算：** 在数论中，我们经常使用模运算，通常用符号“mod”表示。当我们说"a 模 p"时，我们指的是 a 除以 p 的余数。例如，10 模 3 等于 1，因为 10 除以 3 的余数是 1。
2.  **群论：** 群是一种代数结构，它在数学中用于研究对称性和变换。在费马小定理的背后，我们涉及一个特殊类型的群，即乘法群。乘法群是一组带有乘法操作的元素，满足封闭性、结合性、单位元和逆元等性质。

在了解完基本概念后，我们来通过证明从而了解背后的数学原理：

**4.2.1 证明**

我们假设**p 是一个素数**，**a 是一个不被 p 整除的整数**。我们要证明

a(p−1)≡1(modp)a^(p-1) ≡ 1 (mod p)a(p−1)≡1(modp)

**即 a^(p-1)除以 p 的余数等于 1。**

考虑从 1 到 p-1 的所有整数乘以 a，即 a, 2a, 3a, ..., (p-1)a。由于 a 不被 p 整除，这些数与 p 互质（最大公约数为 1），因为如果它们有共同的因子，那么 a 也会被 p 整除。注意：**这个性质是关键。**现在，考虑这些数的乘积：a \* 2a \* 3a \* ... \* (p-1)a。我们可以把它写成 a^(p-1)乘以一个数，即：

a(p−1)∗(2a∗3a∗...∗(p−1)a)a^(p-1) \* (2a \* 3a \* ... \* (p-1)a)a(p−1)∗(2a∗3a∗...∗(p−1)a)

注意，由于 a 和 p 互质，这个乘积中的每一项与 p 都互质，因此它们在模 p 的情况下，可以看作是它们本身。

因此，上述乘积在模 p 的情况下可以简化为：

a(p−1)∗(2∗3∗...∗(p−1))a^(p-1) \* (2 \* 3 \* ... \* (p-1))a(p−1)∗(2∗3∗...∗(p−1))

这里的 2 \* 3 \* ... \* (p-1)等于(p-1)!，即(p-1)的阶乘。

现在，根据费马小定理的要求，我们希望**证明 a^(p-1) ≡ 1 (mod p)（前文提到）**。我们可以**将(p-1)!化简为-1 (mod p)**。这是因为在模 p 的情况下，(p-1)!与-1 具有相同的余数。

因此，我们得到：

a(p−1)∗(p−1)!≡a(p−1)∗(−1)(modp)a^(p-1) \* (p-1)! ≡ a^(p-1) \* (-1) (mod p)a(p−1)∗(p−1)!≡a(p−1)∗(−1)(modp)

和

a(p−1)∗(−1)≡−a(p−1)(modp)a^(p-1) \* (-1) ≡ -a^(p-1) (mod p)a(p−1)∗(−1)≡−a(p−1)(modp)

但是，根据模运算的性质，-a^(p-1)和 a^(p-1)具有相同的余数。

因此，我们得到：

a(p−1)≡−a(p−1)(modp)a^(p-1) ≡ -a^(p-1) (mod p)a(p−1)≡−a(p−1)(modp)

将两边同时加上**a^(p-1**)，得到：（前文提到）

2a(p−1)≡0(modp)2a^(p-1) ≡ 0 (mod p)2a(p−1)≡0(modp)

因为 2a^(p-1)与 0 在模 p 的情况下具有相同的余数，所以我们可以得出：

a^(p-1) ≡ 1 (mod p)

这就完成了费马小定理的证明。

**4.2.3 回顾证明方法**

1.  **前提：** 假设 p 是素数，a 是不被 p 整除的整数。
2.  **关键观察：** 考虑从 1 到 p-1 的所有整数乘以 a，这些数与 p 互质（没有共同的因子）。
3.  **乘法群性质：** 将这些数相乘，得到 a^(p-1)乘以一组数，因为它们与 p 互质，所以它们在模 p 的情况下可以看作是它们本身。
4.  **简化乘积：** 这样的乘积在模 p 的情况下可以简化为 a^(p-1)乘以(p-1)!。
5.  **化简阶乘：** (p-1)!可以在模 p 的情况下化简为-1。
6.  **模运算性质：** 利用模运算性质，得到 a^(p-1) ≡ -a^(p-1) (mod p)。
7.  **合并项：** 加上 a^(p-1)两边，得到 2a^(p-1) ≡ 0 (mod p)。
8.  **总结结论：** 因为 2a^(p-1)与 0 在模 p 的情况下具有相同的余数，得出 a^(p-1) ≡ 1 (mod p)。

**这里的证明方法可能晦涩难懂，不过没关系，您可以直接阅读回顾证明方法来进一步理解！**现在，我们来思考一下它在区块链中到底是干什么的：**在公钥密码学中，费马小定理可以用来构建 RSA 算法的基础。RSA 算法的安全性依赖于大数分解的难度，而费马小定理在加密和解密过程中起到了关键作用，确保只有特定的私钥才能解密加密文本。**

####

[](https://read.web3helper.wiki/web-3-wiki/qu-kuai-lian-ji-chu-jia-mi-suan-fa/rsa-suan-fa-rivestshamiradleman#id-5.-mo-zhi-shu-yun-suan)

####

**5\. 模指数运算**

**5.1 简介**

模指数运算，又称为**模幂运算**，是数学中的一种运算，**通常用于离散对数问题和加密算法中。**在数论和抽象代数中，模指数运算通常在模数下计算幂的结果。具体来说，对于给定的整数 a、b 和模数 n，模指数运算计算的是 a 的 b 次幂对模 n 取余的结果。

**5.2 背后的数学原理**

**这里由于前文包含了很多此处的内容，所以我们直接使用列表的方式为您呈现：**

1.  **模运算：** 在模指数运算中，我们用模数 n 取余数，记作 a mod n，表示 a 除以 n 的余数。
2.  **模幂运算：** 模指数运算计算 a 的 b 次幂对 n 取余，即(a^b) mod n。
3.  **费马小定理：** 如果 p 是素数，a 不是 p 的倍数，那么 a^(p-1)除以 p 的余数是 1。
4.  **欧拉定理：** 如果 a 和 n 互质，a^φ(n)除以 n 的余数是 1，其中 φ(n)是与 n 互质的正整数个数。
5.  **模逆元：** 在模 n 下，a 的逆元 a^(-1)满足(a \* a^(-1)) mod n = 1。在加密算法中很重要。

关于它的作用，相信您在理解前文后应该已经猜到了：**模指数运算常常用于实现数字签名和加密算法，确保交易和通信的安全性。这是因为模指数运算具有计算复杂度高、难以逆推的特性，使得攻击者难以通过反推来破解加密数据。**
