---
title: "Arrays"
---

1. Introduction
2. Array declaration
3. Array creation
4. Array initialization
5. Array declaration, creation and initialization in a single line
6. length vs length()
7. Anonymous arrays
8. Array element assignment
9. Array variable assignment

---

## Introduction

An array is an indexed collection of fixed number of homogeneous data elements.

The main **advantage** of array is we can represent **huge number** of values by using **single variable** so that **readability** of the code will be improved.

But the main **disadvantage** of array is **fixed in size** that is once we creates an array there is no chance of increasing or decreasing the size based on our requirement. Hence to use array's concept compulsory we should know the **size in advance**, which may not possible always.

## Array declaration

### One dimensional array declaration

```java
int[] arr;  // Recomended because name is clearly seperated from type
int []arr;
int arr[];
```

At the time of declaration we can't specify the size otherwise we will get compile time error.
int x[6]; // Invalid
int x[]; // Valid

### Two dimensional array declaration

```java
int[][] arr;  // Recomended because name is clearly seperated from type
int [][]arr;
int arr[][];
int[] []arr;
int[] arr[];
int []arr[];
```

```java
int[] []a, b;    // dim(a) = dim(b) = 2
int[] []a, b[];  // dim(a) = 2, dim(b) = 3
int[] []a, []b;  // Invalid
```

If we want to specify dimension before the variable that facility is applicable only for first variable in a declaration. If we are trying to apply for remaining variables we will get compile time error.

### Three dimensional array declaration

```java
int[][][] arr;  // Recomended because name is clearly seperated from type
int [][][]arr;
int arr[][][];
int[] [][]arr;
int[] arr[][];
int[] []arr[];
int[][] []arr;
int[][] arr[];
int [][]arr[];
int []arr[][];
```

## Array creation

Every array in Java is an **object** only hence we can create arrays by using **new** operator.

```java
int[] a = new int[10];  // a is a reference variable to array object
int[][] a2 = new int[2][3];
System.out.println(a.getClass().getName());   // Output: [I
System.out.println(a2.getClass().getName());  // Output: [[I
```

For every array type corresponding classes are available and this classes are part of Java language and not available to the programmer level.

| Array type | Class name |
| ---------- | ---------- |
| int[]      | [I         |
| int[][]    | [[I        |
| double     | [D         |
| short      | [S         |
| byte       | [B         |
| boolean    | [Z         |

- At the time of array creation compulsory we should specify the size otherwise we will get compile time error.
  int[] arr = new int[]; // error: array dimension missing
  int[] arr = new int[5];
- It is legal to have an array with size zero in Java.
  int[] arr = new int[0];
- If we are trying to specify array size with negative int value then we will get runtime exception saying NegativeArraySizeException.
  int[] arr = new int[-5]; // java.lang.NegativeArraySizeException: -5
- To specify array size the allowed data types are byte, short, char and int. If we are trying to specify any other type then we will get compile time error.

```java
byte b = 10;
short s = 25;
int[] x = new int[b];
int[] x = new int[s];
int[] x = new int['a'];
int[] x = new int[10L];  // error: PLC from long to int
```

- The maximum allowed array size in Java is 2147483647 which is the maximum value of int data type. Even in the first case we may get runtime exception if sufficient memory not available.

```java
int[] x = new int[2147483647];  // valid but may give exception: java.lang.OutofMemoryError: Requested array size exceeds virtual machine limit
int[] x = new int[2147483648];  // error: integer number too large
```

### Two dimensional array creation

In Java two dimensional array is not implemented by using matrix style. Sun people followed array of arrays approach for multi dimensional array creation. The main advantage of this approach memory utilization will be improved. Example

```java
int[][] x = new int[2][];
x[0] = new int[2];
x[1] = new int[3];
```

### Three dimensional array creation

```java
int[][][] x = new int[2][][];
x[0] = new int[3][];
x[0][0] = new int[1];
x[0][1] = new int[2];
x[0][2] = new int[3];
x[1] = new int[2][2];
```

## Array initialization

Once we creates array every element by default initialized with default values.

```java
int[] x = new int[2];
System.out.println(x);
System.out.println(x[0]);

// Output
// [I@2f92e0f4
// 0
```

Whenever we are trying to print any reference variable internally toString() method will be called which is implemented by default to return in the following form classname@hashcode_in_hexadecimal_form.

```java
int[][] x = new int[2][3];
System.out.println(x);        // [[I@2f92e0f4
System.out.println(x[0]);     // [I@28a418fc
System.out.println(x[0][0]);  // 0
```

```java
int[][] x = new int[2][];
System.out.println(x);        // [[I@2f92e0f4
System.out.println(x[0]);     // null
System.out.println(x[0][0]);  // Exception: java.lang.NullPointerException
```

**Note:** If we are trying to perform any operation on null then we will get runtime exception saying NullPointerException.

Once we create an array every array element by default initialized with default values. If we are not satisfied with default values then we can override this values with our customized values.

```java
int[] arr = new int[2];
x[0] = 10;
x[1] = 20;
x[2] = 30;   // Exception: java.lang.ArrayIndexOutOfBoundsException
x[-2] = 40;  // Exception: java.lang.ArrayIndexOutOfBoundsException
x[2.5] = 50; // error: incompatible types: PLC from double to int
```

**Note:** If we are trying to access array element with out of range index (either positive or negative int value) then we will get runtime exception saying ArrayIndexOutOfBoundsException.

## Array declaration, creation and initialization

We can declare, create and initialize an array in a single line (shortcut representation)

```java
int[] x;
x = new int[3];
x[0] = 10;
x[1] = 20;
x[2] = 30;
```

```java
int[] x = {10, 20, 30};
char[] ch = {'a', 'e', 'i', 'o', 'u'};
String[] str = {"Hello", "World", "Humans"};
int[][] x = {{10, 20}, {30, 40, 50}};
```

We can extend this shortcut for multi dimensional arrays also.

If we want to use this shortcut compulsory we should perform all activities in a single line. If we trying to divide into multiple lines then we will get compile time error.

```java
int[] x = {10, 20, 30};  // Valid
int[] x;
x = {10, 20, 30};  // error: illegal start of expression
```

## length vs length()

### length

length is a final variable applicable for arrays. length variable represents the size of the array.

```java
int[] x = new int[5];
System.out.println(x.length);  // 5
System.out.println(x.length());
/*
error: cannot find symbol
        System.out.println(x.length());
                            ^
  symbol:   method length()
  location: variable x of type int[]
1 error
*/
```

### length()

length() method is a final method applicable for String objects. length() method returns number of characters present in the string.

```java
String s = "hello";
System.out.println(s.length());  // 5
System.out.println(s.length);
/*
error: cannot find symbol
        System.out.println(s.length);
                            ^
  symbol:   variable length
  location: variable s of type String
1 error
*/
```

length variable applicable for arrays but not for String objects, whereas length() method applicable for String objects but not for arrays.

In multi dimensional length variable represents only base size but not total size.

```java
int[] x = new int[6][3];
System.out.println(x.length);     // 6
System.out.println(x[0].length);  // 3
```

There is no direct way to find total length of multi dimensional array but indirectly we can find as follows
x[0].length + x[1].length + x[2].length + . . .

## Anonymous arrays

Sometimes we can declare an array without name such type of nameless arrays are called anonymous arrays. The main purpose anonymous arrays is just for instant use (one-time usage).

We can create anonymous array as follows
new int[ ]{10, 20, 30, 40, 50}

While creating anonymous arrays we can't specify the size otherwise we will get compile time error.
new int[3]{10, 20, 30} // Invalid
new int[ ]{10, 20, 30} // Valid

We can create multi dimensional anonymous arrays also.
new int[ ][ ]{{10, 20}, {30, 40, 50}}

Based on our requirement we can give the name for anonymous array then it is no longer anonymous.
int[ ] x = new int[ ]{10, 20, 30}

---

```java
class Sample
{
    public static int sum(int[] x) {
        int total = 0;
        for (int i : x) {
            total += i;
        }

        return total;
    }

    public static void main(String[] args) {
        int total = sum(new int[]{10, 20, 30, 40});
        System.out.println("The sum is " + total);
    }
}
```

In the above example just to call sum method we required an array but after completing sum method call we not using that array anymore. Hence for this one time requirement anonymous array is the best choice.

## Array element assignment

### Case 1

In the case of primitive type arrays as array elements we can provide any type which can be implicitly promoted to declared type.

```java
byte b = 10;
short s = 25;
int[] x = new int[5];
x[0] = 5;
x[1] = 'a';
x[2] = b;
x[3] = s;
x[4] = 10L;  // error: incompatible types: PLC from long to int
```

In the case of float type arrays the allowed data types are byte, short, char, int, long and float.

### Case 2

In the case of object type arrays as array elements we can provide either declared type objects or its child class objects.

```java
Object[] o = new Object[5];
o[0] = new Object();
o[1] = new String("hello");
o[2] = new Integer(10);
```

```java
Number[] n = new Number[5];
n[0] = new Integer(10);
n[1] = new Double(10.5);
n[2] = new String("hello"); // error: incompatible types: String cannot be converted to int
```

### Case 3

For interface type arrays as array elements its implementation class objects are allowed.

```java
Runnable[] r = new Runnable[5];
r[0] = new Thread();
r[1] = new String("hello");  // error: incompatible types: String cannot be converted to Runnable
```

| Array type                 | Allowed element types                                      |
| -------------------------- | ---------------------------------------------------------- |
| Primitive arrays           | Any type which can be implicitly promoted to declared type |
| Object type arrays         | Either declared type or its child class objects            |
| Abstract class type arrays | Its child class objects                                    |
| Interface type arrays      | Its implementation class objects are allowed               |

## Array variable assignment

### Case 1

Element level promotions are not applicable at array level. For example char element can be promoted to int type whereas char[] can't be promoted to int[].

```java
int[] x = {10, 20, 30};
char[] ch = {'a', 'b', 'c'};
int[] b = x;
int[] c = ch;  // error: incompatible types: char[] cannot be converted to int[]
```

<aside>
💡 char —> int
char[] —> int[]      // Invalid
int —> double
int[] —> double[]  // Invalid
float —> int          // Invalid
float[] —> int[]      // Invalid
String —> Object
String[] —> Object[]  // Valid

</aside>

But in the case of **object** type arrays **child class** type array can be promoted to **parent class** type array.

```java
String[] s = {"A", "B", "C"};
Object[] o = s;
```

### Case 2

Whenever we are assigning one array to another array internal elements won't be copied just reference variables will be reassigned.

```java
int[] a = {1, 2, 3, 4, 5};
int[] b = {6, 7};
a = b;
b = a;
```

### Case 3

Whenever we are assigning one array to array the dimensions must be matched. For example in the place one dimensional int array we should provide one dimensional array only. If we are trying to provide any other dimension than we will get compile time error.

```java
int[][] a = new int[2][];
a[0] = new int[3][4];  //error: incompatible types: int[][] cannot be converted to int[]
a[0] = 10;  // error: incompatible types: int cannot be converted to int[]
a[0] = new int[2];  // Valid
```

**Note:** Whenever we are assigning one array to another array both dimensions and types must be matched but sizes are not required to match.

## Some Questions

### Example 1

```java
class Sample
{
    public static void main(String[] args) {
        for (int i = 0; i <= args.length; i++) {
            System.out.println(args[i]);
        }
    }
}
```

Output below for given inputs

```java
java Sample A B C  // A B C java.lang.ArrayIndexOutOfBoundsException
java Sample A B    // A B java.lang.ArrayIndexOutOfBoundsException
java Sample        // java.lang.ArrayIndexOutOfBoundsException
```

### Example 2

```java
class Sample
{
    public static void main(String[] args) {
        String[] argh = {"X", "Y", "Z"};
        args = argh;
        for (String s : args) {
            System.out.println(s);
        }
    }
}
```

Output below for given inputs

```java
java Sample A B C  // X Y Z
java Sample A B    // X Y Z
java Sample        // X Y Z
```

### Example 3

```java
int[][] a = new int[4][3];
a[0] = new int[4];
a[1] = new int[2];
a = new int[3][2];
```

Total how many objects created? **11**
Total how many objects eligible for GC? **7**
