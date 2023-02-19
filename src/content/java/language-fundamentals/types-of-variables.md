---
title: "Types of Variables"
---

## Division 1

Based on type of value represented by a variable all variables are divided into two types

### primitive variables

Primitive variables can be used to represent primitive values. Example
int x = 10;

### reference variables

Reference variables can be used to refer objects. Example
Student s = new Student();

## Division 2

Based on position of declaration and the behavior all variables are divided into 3 types

- Instance variables
- Static variables
- Local variables

## Instance variables

If the value of a variable is varied from object to object such type of variables are called **instance variables**.

- For every object a separate copy of instance variables will be created.
- Instance variables should be declared within the class directly but outside of any method or block or constructor.
- Instance variable will be created at the time of object creation and are destroyed at the time of object destruction. Hence the scope of instance variable is exactly same as the scope of object.
- Instance variables will be stored in the heap memory as the part of object.
- We can't access instance variables directly from static area but we can access by using object reference.
  But we can access instance variables directly from instance area.

```java
class Sample
{
    int x = 10;

    public void m1() {
        System.out.println(x);  //10
    }

    public static void main(String[] args) {
        // System.out.println(x);  // error: non-static variable x cannot be referenced from a static context
        Sample s = new Sample();
        System.out.println(s.x);  // 10
        s.m1();
    }
}
```

- For instance variables JVM will always provide default values and we are not required to perform initialization explicitly.

```java
class Sample
{
    int x;
    double d;
    boolean b;
    String s;

    public static void main(String[] args) {
        Sample t = new Sample();

        System.out.println(t.x);  // 0
        System.out.println(t.d);  // 0.0
        System.out.println(t.b);  // false
        System.out.println(t.s);  // null
    }
}
```

- Instance variables also known as **object level variables** or **attributes**.

## Static variables

If the value of a variable is not varied from object to object the its not recommended to declare variable as instance variable. We have to declare such type of variable at class level by using **static modifier**.

In the case of instance variables for every object a separate copy will be created but in the case of static variables a single copy will be created at class level and shared by every object of the class.

Static variables should be declared within the class directly but outside of any method or block or constructor.

Static variables will be created at the time of class loading and destroyed at the time of class unloading. Hence scope of static variable is exactly same as scope of dot-class file.

**java Sample** (enter)

1. Start JVM
2. Create and start main thread
3. Locate Sample.class file
4. Load Sample.class (static variable creation)
5. Execute main method()
6. Unload Sample.class (static variable destruction)
7. Terminate main thread
8. Shut down JVM

Static variables will be stored in **Method Area**.

We can access static variables either by object reference or class name but recommended to use class name. Within the same class it is not required to use class name and we can access directly.

```java
class Sample
{
    static int x = 10;

    public void m1() {
        System.out.println(x);
    }

    public static void main(String[] args) {
        Sample t = new Sample();

        System.out.println(t.x);
        System.out.println(Sample.x);
        System.out.println(x);
    }
}
```

We can access static variables directly from both instance and static areas.

For static variables JVM will provide default values and we are not required to perform explicitly.

```java
class Sample
{
    static int x;
    static double d;
    static String s;

    public static void main(String[] args) {
        System.out.println(x);
        System.out.println(d);
        System.out.println(s);
    }
}
```

Static variables also known as **class level variables** or **fields**.

**Question**

```java
class Sample
{
    static int x = 10;
    int y = 20;

    public static void main(String[] args) {
        Sample t1 = new Sample();
        t1.x = 888;
        t1.y = 999;
        Sample t2 = new Sample();
        System.out.println(t2.x + "..." + t2.y);
    }
}
```

## Local variables

Sometimes to meet temporary requirements of the programmer we can declare variables inside a method or block or constructor. Such type of variables are called **local variables** or **temporary variables** or **stack variables** or **automatic variables**.

Local variables will be stored inside stack memory.

Local variables will be created while executing the block in which we declared it. Once block execution completes automatically local variable will be destroyed. Hence the scope of local variable is the block in which we declared in.

For local variables won't provide default values. Compulsory we should perform initialization explicitly before using that variable i.e. if we are not using it is not required to perform initialization.

```java
class Sample
{
    public static void main(String[] args) {
        int x;
        System.out.println("hello");
    }
}
```

```java
class Sample
{
    public static void main(String[] args) {
        int x;
        System.out.println(x);
        // error: variable x might not have been initialized
    }
}
```

```java
class Sample
{
    public static void main(String[] args) {
        int x;
        if (args.length) {
            x = 10;
        }
        System.out.println(x);  // error: variable x might not have been initialized
    }
}
```

```java
class Sample
{
    public static void main(String[] args) {
        int x;
        if (args.length > 0)
            x = 10;
        else
            x = 20;

        System.out.println(x);
    }
}
```

**Notes**

- It is not recommended to perform initialization for local variables inside logical blocks because there is no guarantee for the execution of these blocks always at runtime.
- It is highly recommended to perform initialization for local variables at the time of declaration at least with default values.

The only applicable modifier for local variables is **final**. By mistake if we are trying to apply any other modifier than we will get compile time error.

```java
class Sample
{
    public static void main(String[] args) {
        // public int x = 10;     //
        // private int x = 10;    //
        // protected int x = 10;  // error: illegal start of expression
        // static int x = 10;     //
        // transient int x = 10;  //
        // volatile int x = 10;   //

        final int x = 10;
    }
}
```

**Note:** If we are not declaring with any modifier then by default it is default but this rule is applicable only for instance static variables but not for local variables.

## Conclusions

For instance and static variables JVM will provide default values and we are not required to perform initialization explicitly. But for local variables JVM won't provide default values compulsory we should perform initialization explicitly before using that variable.

Instance and static variables can be accessed by multiple threads simultaneously and hence this are not thread safe but in the case of local variables for every thread a separate copy will be created and hence local variables are thread safe.

Every variable in Java should be either instance or static or local variable.
Every variable in Java should be either primitive or reference variable.
Hence various possible combinations of variables in Java are

```java
class Sample
{
    int x = 10;                 // instance-primitive
    static String s = "hello";  // static-reference

    public static void main(String[] args) {
        int[] y = new int[5];   // local-reference
    }
}
```

## Uninitialized arrays

```java
class Sample
{
    int x[];

    public static void main(String[] args) {
        Sample t = new Sample();
        System.out.println(t.x);     // null
        System.out.println(t.x[0]);  // Exception: java.lang.NullPointerException
    }
}
```

### Instance level

```java
int x[];
    System.out.println(t.x);     // null
    System.out.println(t.x[0]);  // Exception: java.lang.NullPointerException

int x[] = new int[5];
    System.out.println(t.x);     // [I@2f92e0f4
    System.out.println(t.x[0]);  // 0
```

### Static level

```java
static int x[];
    System.out.println(t.x);     // null
    System.out.println(t.x[0]);  // Exception: java.lang.NullPointerException

static int x[] = new int[5];
    System.out.println(t.x);     // [I@2f92e0f4
    System.out.println(t.x[0]);  // 0
```

### Local level

```java
int x[];
System.out.println(x);     // error: variable x might not have been initialized
System.out.println(x[0]);  // error: variable x might not have been initialized

int x[] = new int[5];
System.out.println(x);     // [I@2f92e0f4
System.out.println(x[0]);  // 0
```

**Note:** Once we create an array every array element by default initialized with default values irrespective of whether it is instance or static or local array.
