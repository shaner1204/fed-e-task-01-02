# fed-tast-01-02

#### 简答题
##### 1、引用计数工作原理：在内部通过一个引用计数器，来维护当前对象的引用数，从而判断该对象引用数是否为0，来判断是不是垃圾对象，当引用数为0时，GC开始工作，将其所在的对象空间进行回收和释放再使用
    优点：（1）、发现垃圾时立即回收
          （2）、最大限度减少程序暂停
    缺点：（1）、无法回收循环引用的对象 
          （2）、时间开销大
##### 2、标记整理可以看做是标记清除的增强操作，标记阶段的操作和标记清除一致，都会遍历所有的对象，将当前的可达活动对象进行标记，清除阶段会先执行整理，移动对象的位置，让它们可以在地址上产生连续，将活动对象右侧的的范围进行整体回收。
##### 3、回收过程采用复制算法 + 标记整理，新生代内存区分为二个等大小空间为【From 和 To】，使用空间为 From，空闲空间为 To，活动对象存储于 From 空间，标记整理后将活动对象拷贝至 To，From 与 To 交换空间完成释放与回收操作。
##### 4、为了提高工作效率需使用增量标记算法。原理：【标记增量】就是将当前一整段的垃圾回收操作拆成多个小步，组合完成当前的回收操作。从而替代之前一口气做完的垃圾回收操作。这样可以让垃圾回收与程序交替着完成

#### 代码题1
##### 练习1：const last = fp.flowRight(fp.prop('in_stock'), fp.last) console.log(last(cars))
##### 练习2：const firstName = fp.flowRight(fp.prop('name'), fp.first) console.log(firstName(cars))
##### 练习3：const average = fp.flowRight(_average, fp.map(fp.prop('dollar_value'))) console.log(average(cars), 'flowRight-----平均')
##### 练习4：const sanitizeNames = fp.flowRight(_underscore, fp.toLower) console.log(sanitizeNames(["Hello World"]))

#### 代码题2
##### 练习1：let ex1 = maybe.map(x => fp.reduce(fp.add, 0, x))
##### 练习2：let ex2 = xs.map(fp.first)
##### 练习3: let ex3 = safeProp('name', user).map(fp.first)
##### 练习4: let ex4 = Maybe.of(33).map(x => parseInt(x))
