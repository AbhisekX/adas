---
title: "Literals"
---

A constant value which can be assigned to the variable is called a literal.

Eg. int x = 10;
int : data type / keyword
x : name of variable / identifier
10 : constant value / literal

## Integer Literals

For integral data types (byte, short, int, long) we can specify literal value in the following ways

### Decimal form (base 10)

Allowed digits are 0-9. Eg. int x = 10;

### Octal form (base 8)

Allowed digits are 0-7. Literal value should be prefixed with zero. Eg. int x = 010;

### Hexadecimal form (base 16)

Allowed digits are 0-9, a-f. For extra digits () we can use both lower case and uppercase characters. This is one of very few areas where Java is not case sensitive. The literal value should be prefixed with 0x or 0X. Eg. int x = 0x10aFeD;

This are only possible ways to specify literal value integral data types.

**Valid expressions:**
int x = 10
int x = 0777;
int x = 0xFace;
int x = 0xBeef;

**Invalid expressions:**
int x = 0786;
\*\*\*\*error: integer number too large
int x = 0xBeer;
error: ';' expected

```java
int d = 10;
int o = 010;
int x = 0x10;
System.out.println(d + "..." + o + "..." + x);

// Output
// 10...8...16
```

### Binary form (base 2)

For integer until 1.6 version we can specify literal value in decimal, octal and hexadecimal form. But from 1.7 version we can specify literal value even in binary form also. Allowed digits are 0 and 1. Literal value should be prefixed with 0b or 0B. Example
int b = 0b1111;
System.out.println(b); // Output: 15

---

By default every integral literal is of int type but we can specify explicitly as long type by suffixed with l or L.

**Valid expressions:**
int d = 10;
long l = 10L;
long l = 10;

**Invalid expressions:**
int d = 10L;
error: incompatible types: possible lossy conversion from long to int

There is no direct way to specify byte and short literal explicitly, but indirectly we can specify. Whenever we are assigning integral literal to the byte variable and if the value within the range of byte then compiler treats it automatically as byte literal; similarly short literal also.

**Valid expressions:**
byte b = 10;
byte b = 127;
short s = 32767;

**Invalid expressions:**
byte b = 128;
error: incomp. types: plc from int to byte
short s = 32768;
error: incomp. types: plc from int to short

## Floating Point Literals

By default every floating point literal is of double type and hence we can't assign directly to the float variable.

But we can specify floating point literal as float type by suffixed with small f or F. Example
float f = 123.456; // error: incompatible types: possible lossy conversion from double to float
float f = 123.456f;
double d = 123.456;

We can specify explicitly floating point as double type by suffixed with d or D. Of course this convention is not required. Example
double d = 123.456d
float f = 123.456d; // error: incompatible types: possible lossy conversion from double to float

We can specify floating point literal only in decimal form and we can't specify in octal and hexadecimal forms. Example
double d = 123.456;
double d = 0123.456; // Its decimal literal and not octal
double d = 0x123.456; // error: malformed floating point literal

We can assign integral literals directly to floating point variables and that integral literals can be specified either in decimal, octal or hexadecimal forms.

double d = 0786; // error: integer number too large
double d = 0xFace;

double d = 0786.0;
double d = 0xFace.0; // error: malformed floating point literal

double d = 10;
System.out.println(d); // 10.0

We can't assign floating point literals to integral types.
double d = 10;
int x = 10.0; // error: incompatible types: possible lossy conversion from double to int

We can specify floating point literal even in exponential form (scientific notation). Example
double d = 1.2e3;
System.out.println(d); // 1200.0
float f = 1.2e3; // error: incompatible types: possible lossy conversion from double to float
float f = 1.2e3f;

---

<aside>
💡 Usage of _ symbol in numeric literals. From 1.7 version we can use _ symbol between digits of numeric literal. Example
int x = 299_792_458;
double d = 123_456.789;

</aside>

The main advantage of this approach is readability of the code will be improved. At the time of compilation this \_ symbols will be removed automatically. Hence after compilation the above lines will become,
int x = 299792458;
double d = 123456.789;

We can use more than one underscore also between the digits. Eg. int x = 1**2_3\_\_**4;

We can use _ symbol only between the digits. If we are using anywhere else we will get compile time error. Below are **invalid.**
double d = \_123.456; // error: cannot find symbol
double d = 123_.456; // error: illegal underscore
double d = 123.456\_; // error: illegal underscore

## Boolean Literals

The only allowed values for boolean data type are true or false.

boolean b= true;
boolean b = 0; // error: incompatible types: int cannot be converted to boolean
boolean b = True; // error: cannot find symbol
// symbol: variable True
// location: class Sample
boolean b = "true"; // error: incompatible types: String cannot be converted to boolean

## Char Literals

We can specify char literal as single character within single quotes. Eg. char ch = 'a';

**Invalid expressions:**

```java
char ch = a;  // error: cannot find symbol
              // symbol:   variable True
              // location: class Sample

****char ch = "a";  // error: incompatible types: String cannot be converted to char

char ch = 'ab';
/*
error: unclosed character literal
    char ch = 'ab';
                   ^
Sample.java:4: error: unclosed character literal
    char ch = 'ab';
                        ^
Sample.java:4: error: not a statement
    char ch = 'ab';
                      ^
3 errors
*/
```

We can specify char literal as integer literal which represents Unicode value of the character and the integer literal can be specified either in decimal, octal or hexadecimal forms, but allowed range is 0-65,535. Example
char ch = 97;
System.out.println(ch); // Output: a

**Valid expressions:**
char ch = 0xFace;
char ch = 0777;
char ch = 65535;

**Invalid expressions:**
char ch = 65536;
// error: incompatible types: possible lossy conversion from int to char

We can represent char literal in Unicode representation which is nothing but '\uxxxx' (hexadecimal number). Example
char ch = '\u0061';
System.out.println(ch); // Output: a

Every escape character is a valid char literal. Example
char ch = '\n';
char ch = '\t';
char ch = '\m'; // error: illegal escape character

**Escape characters**

| Escape character | Description     |
| ---------------- | --------------- |
| \n               | new line        |
| \t               | horizontal tab  |
| \r               | carriage return |
| \b               | backspace       |
| \f               | form feed       |
| \'               | single quote    |
| \"               | double quote    |
| \\               | back slash      |

## String Literals

Any sequence of characters within double quotes is treated as string literal. Example
String str = "Hello World!!!";

<aside>
💡 byte —> short —> int —> long —> float —> double
                                |
                               char

</aside>

8 byte long value we can assign to 4 byte float variable because both are following different memory representations internally. Example
float f = 123L;
System.out.println(f); // Output: 123.0
