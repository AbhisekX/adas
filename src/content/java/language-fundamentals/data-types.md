---
title: "Data types"
---

In Java every variable and every expression has some type. Each and every data type is clearly defined. Every assignment should be checked by compiler for type compatibility.

Because of this reasons we can conclude Java lang is **strongly typed** programming language.

Java is not considered as a pure object oriented programming language because several OOP features are not satisfied by Java (like operator overloading, multiple inheritance, etc.).
Moreover we are depending on primitive data types which are non-objects.

<aside>
💡 **primitive data types 8**
|- Numeric 6
|  |- Integral 4
|  |  |- byte
|  |  |- short
|  |  |- int
|  |  |- long
|  |
|  |- Floating point 2
|     |- float
|     |- double
|
|- Non numeric 2
   |- boolean
   |- char

</aside>

Except boolean and char remaining data types are considered as signed data types because we can represent both positive and negative numbers.

## Integral data types

### byte

Size: 1 byte (8 bits)
Max value: 127
Min value: -128
Range: -128 to +127

The most significant bit act as sign bit. 0 means positive number, 1 means negative number. Positive numbers will be represented directly in the memory while negative numbers in 2's complement form.

Eg. byte b = 10;
byte b = 127;
are correct. While below are wrong.

```java
byte b = 128;
/*
error: incompatible types: possible lossy conversion from int to byte
byte b = 128;
^
1 error
*/
```

```java
byte b = true;
/*
error: incompatible types: boolean cannot be converted to byte
byte b = true;
^
1 error
*/
```

```java
byte b = "hello";
/*
error: incompatible types: String cannot be converted to byte
byte b = "hello";
^
1 error
*/
```

Byte is the best choice if we want to handle data in terms of Streams either from the file or from the network (file supported form and network supported form are byte).

### short

This is the most rarely used data type in Java.

Size: 2 byte (16 bits)
Max value: 32,767
Min value: -32,768
Range: -2^15 to 2^15-1

short data type is best suitable for 16 bit processors like 8085 but these processors are completely outdated and hence corresponding short data type is outdated data type.

### int

The most commonly used data type in Java is int.

Size: 4 byte (32 bits)
Max value: 2,147,483,647
Min value: -2,147,483,648
Range: -2^31 to 2^31-1

```java
int d = 2147483648;
/*
error: integer number too large
int b = 2147483648;
^
1 error
*/
```

```java
int d = 2147483648L;
/*
error: incompatible types: possible lossy conversion from long to int
int b = 2147483648L;
^
1 error
*/
```

### long

Sometimes int may not enough to hold big values then we should go for long type. Eg. The amount of distance travelled by light in 1000 days, to hold this value int may not enough we should go for long data type. long l = 126000 _ 60 _ 60 _ 24 _ 1000;

The number of characters present in a big file may exceed int range hence the return type of length method is long but not int. long l = f.length();

Size: 8 byte (64 bits)
Range: -2^63 to 2^63-1

**Note:** All the above data types byte, short, int, long meant for representing integral values. If we want to represent floating point values then we should go for floating point data types.

## Floating point data types

### float

- Accuracy 5-6 places
- Single precision
- Size: 4 bytes
- Range: -3.4e38 to 3.4e38

### double

- Accuracy 14-15 places
- Double precision
- Size: 8 bytes
- Range: -1.7e308 to 1.7e308

## Non numeric data types

### boolean

Size: Depends on virtual machine
Range: Not applicable (but allowed values are true/false)

boolean b = true;

```java
boolean b = 0;
/*
error: incompatible types: int cannot be converted to boolean
boolean b = 0;
^
1 error
*/
```

```java
boolean b = True;
/*
error: cannot find symbol
boolean b = True;
^
symbol:   variable True
location: class Sample
1 error
*/
```

```java
int x = 0;
if (x) {
    System.out.println("Hello");
} else {
    System.out.println("Hi");
}
/*
error: incompatible types: int cannot be converted to boolean
    if (x) {
        ^
1 error
*/
```

```java
while (1) {
    System.out.println("Hi");
}
/*
error: incompatible types: int cannot be converted to boolean
    while (1) {
           ^
1 error
*/
```

### char

Old languages (C/C++) are ASCII code based and the number of allowed different ASCII code characters are ≤ 256. To represent the 256 characters 8 bits are enough. Hence the size of char in old languages is 1 byte.

But Java is Unicode based and the number of different Unicode characters are > 256 and ≤ 65,536. To represent this many characters 8 bits may not enough compulsory we should go for 16 bits. Hence the size of char in Java is 2 bytes.

Size: 2 bytes (16 bits)
Range: 0 to 65,535

## Summary of Java Primitive Data types

| Data type | Size (bytes) | Range               | Wrapper class | Default value       |
| --------- | ------------ | ------------------- | ------------- | ------------------- |
| byte      | 1            | -2^7 to 2^7-1       | Byte          | 0                   |
| short     | 2            | -2^15 to 2^15-1     | Short         | 0                   |
| int       | 4            | -2^31 to 2^31-1     | Integer       | 0                   |
| long      | 8            | -2^63 to 2^63-1     | Long          | 0                   |
| float     | 4            | -3.4e38 to 3.4e38   | Float         | 0.0                 |
| double    | 8            | -1.7e308 to 1.7e308 | Double        | 0.0                 |
| boolean   | NA           | NA                  | Boolean       | false               |
| char      | 2            | 0 to 65,535         | Character     | 0 (space character) |

**Note:** null is the default value for object refence and we can't apply for primitives. If we trying to use for primitive then we will get compile time error. Example,

```java
char ch = null;
/*
error: incompatible types: <null> cannot be converted to char
    char ch = null;
              ^
1 error
*/
```
