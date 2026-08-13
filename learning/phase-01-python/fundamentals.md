## 1. Python Introduction

Python is a high-level, general-purpose programming language widely used in software development, automation, data science, machine learning, and AI.

Key characteristics:

* Simple and readable syntax
* Dynamically typed
* Interpreted
* Large standard library
* Large ecosystem of third-party packages

---

## 2. Python IDEs

An IDE (Integrated Development Environment) provides tools for writing, running, and debugging code.

Common options include:

* VS Code
* PyCharm
* Jupyter Notebook
* IDLE

For this learning journey, I primarily use **VS Code**.

---

## 3. Variables

A variable is a name that refers to a value/object.

```python
name = "Rafay"
age = 16
```

Python does not require specifying a variable's type when assigning a value.

```python
age = 16
age = "sixteen"
```

The same variable can refer to objects of different types because Python is dynamically typed.

---

## 4. Variable Declaration and Initialization

Python creates a variable when a value is assigned to it.

```python
score = 100
```

Here:

* `score` is the variable name.
* `100` is the assigned value.
* The assignment operator `=` associates the name with the value.

Python does not require a separate declaration step like some statically typed languages.

---

## 5. Rules for Variable Names

Python variable names:

* Can contain letters, numbers, and underscores.
* Cannot start with a number.
* Cannot contain spaces.
* Are case-sensitive.
* Cannot use Python keywords.

Valid:

```python
student_name = "Rafay"
age2 = 16
_total = 100
```

Invalid:

```python
2age = 16
student name = "Rafay"
```

A common convention is to use **snake_case** for variable names.

---

## 6. Data Types

A data type determines the kind of value an object represents.

Common Python types include:

```python
int       # Integer
float     # Decimal number
str       # String
bool      # Boolean
list      # List
tuple     # Tuple
dict      # Dictionary
set       # Set
```

Example:

```python
age = 16              # int
height = 5.8          # float
name = "Rafay"        # str
is_student = True     # bool
```

The `type()` function can be used to inspect an object's type.

```python
print(type(age))
```

---

## 7. Mutable vs Immutable

Objects can be broadly categorized as **mutable** or **immutable**.

### Mutable

Mutable objects can be changed after they are created.

Examples:

* `list`
* `dict`
* `set`

```python
numbers = [1, 2, 3]
numbers.append(4)
```

The existing list is modified.

### Immutable

Immutable objects cannot be changed after creation.

Examples:

* `int`
* `float`
* `str`
* `tuple`
* `bool`

```python
name = "Rafay"
name = name + " Chishti"
```

The original string is not modified. A new string is created and assigned to `name`.

Understanding mutability is important because it affects how objects behave when they are modified or referenced by multiple variables.

---

## 8. Sequence vs Non-Sequence

A sequence is an ordered collection whose elements can generally be accessed by position/index.

Examples:

* `str`
* `list`
* `tuple`

```python
numbers = [10, 20, 30]

print(numbers[0])
print(numbers[1])
```

Non-sequence collection types include structures such as:

* `set`
* `dict`

These have different access and organization mechanisms.

---

## Key Takeaways

* Python is dynamically typed.
* Variables are names that reference objects.
* Python does not require explicit variable declarations.
* Variable names must follow Python's naming rules.
* Every value/object has a type.
* Mutable objects can be changed after creation.
* Immutable objects cannot be changed after creation.
* Lists, tuples, and strings are common sequence types.
* Understanding Python's object and data-type behavior is important before moving into more advanced programming.

## Next Topics

* Lists
* Tuples
* Dictionaries
* Sets
* Decision-making structures
* Functions
* `for` loops
* `while` loops
